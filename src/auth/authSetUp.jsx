import "../auth/Firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useState, useCallback } from "react";

const Auth_context = createContext();

export function useAuth() {
  return useContext(Auth_context);
}

export function AuthProvider({ children }) {
  //   const { loading, setLoadig } = useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState(null);

  // sing with google
  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user.displayName);
      await localStorage.setItem("user", JSON.stringify(user));
      console.log(user.displayName, user.email);
    } catch (err) {
      console.log(err);
    }
  };

  // sing out
  const googleAuthSingOut = async () => {
    try {
      const result = await signOut(auth);
      setUser(result);
    } catch (error) {
      setUser(error);
    }
  };

  const value = { googleAuth, user, googleAuthSingOut };
  return (
    <Auth_context.Provider value={value}>{children}</Auth_context.Provider>
  );
}
