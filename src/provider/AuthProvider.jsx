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
import axios from "axios";

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
         setLoading(false);
         setUser(result);
         if (result) {
            axios.post("http://localhost:3000/jwt", { email: result.email }).then((res) => {
               console.log(res.data.token);
               localStorage.setItem("jwt-token", JSON.stringify(res.data.token));
            });
         } else {
            localStorage.removeItem("jwt-token");
         }
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
