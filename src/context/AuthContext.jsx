import React, { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const authContext = createContext();

//custom hook for using the context
export const useAuth = () => {
  return useContext(authContext);
};

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [modal, setModal] = useState({ isOpen: false, title: "", content: "" });
  const [alert, setAlert] = useState({
    isAlert: false,
    severity: "info",
    message: "",
    timeout: null,
    location: "",
  });
  const [loading, setLoading] = useState(false);

  //removing sign up functionality for better security

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("user status changed: ", user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    modal,
    setModal,
    alert,
    setAlert,
    loading,
    setLoading,
  };
  return <authContext.Provider {...{ value }}>{children}</authContext.Provider>;
};

export default AuthContext;
