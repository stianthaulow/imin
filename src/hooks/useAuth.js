import { useState, useEffect } from "react";
import firebase, { auth, db, providers } from "../firebase";

const usersRef = db.collection("users");

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const loginWithFacebookHandler = () => {
    firebase.auth().signInWithRedirect(providers.facebook);
  };

  const loginWithGoogleHandler = () => {
    firebase.auth().signInWithRedirect(providers.google);
  };

  const loginHandlers = {
    loginWithFacebookHandler,
    loginWithGoogleHandler
  };

  const logoutHandler = async () => {
    await auth.signOut();
    setUser(null);
  };

  const signIn = async user => {
    const query = await usersRef.where("emails", "array-contains", user.email);
    const querySnap = await query.get();

    if (querySnap.empty) {
      setUser({ name: user.displayName, isKnown: false });
      setIsLoading(false);
    } else {
      const userid = querySnap.docs[0].id;
      const userInfo = querySnap.docs[0].data();

      setUser({ isKnown: true, img: user.photoURL, ...userInfo });
      setIsLoading(false);

      const userDocRef = usersRef.doc(userid);
      await userDocRef.update({ img: user.photoURL });
    }
  };

  useEffect(() => {
    return auth.onAuthStateChanged(async user => {
      if (user) await signIn(user);
      else setIsLoading(false);
    });
  }, []);
  return { isLoading, user, loginHandlers, logoutHandler };
}
