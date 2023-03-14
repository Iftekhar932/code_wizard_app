import React, { createContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GithubAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleGithubSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailVerificationMail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const pwdResetLinkMail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const emailLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const collectName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logOut = () => {
    console.log("logged Out");
    return signOut(auth);
  };

  const userDeletion = () => {
    deleteUser(user);
  };

  const reAuthentication = (email, password) => {
    const credential = EmailAuthProvider.credential(email, password);
    return reauthenticateWithCredential(user, credential);
  };

  const authInfo = {
    googleSignIn,
    googleSignIn,
    emailSignUp,
    emailVerificationMail,
    pwdResetLinkMail,
    emailLogIn,
    collectName,
    logOut,
    userDeletion,
    reAuthentication,
    handleGithubSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
