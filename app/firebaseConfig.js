"use client"

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

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

export async function createAccount(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      console.log(error)
    })
}