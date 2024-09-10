"use client"

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  return isAuthenticated;
}

export async function createAccount(email, password, errorHandler) {
  createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      errorHandler(error);
    })
}

export async function loginWithEmailAndPassword(email, password, errorHandler) {
  signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      errorHandler(error)
    });
}