import { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();

   const registerEmailPass = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
   };
   const loginEmailPass = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const updateUser = (name) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
      });
   };

   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (result) => {
         console.log(result);
         setLoading(false);
         setUser(result);
      });
      return unsubscribe;
   }, []);

   const authInfo = {
      user,
      loading,
      registerEmailPass,
      loginEmailPass,
      googleLogin,
      updateUser,
      logOut,
   };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
