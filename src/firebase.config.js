// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDzaRotYJc6gBmq3zd9S52oTbyvIg7DLM8",

  authDomain: "house-marketplace-app-9afab.firebaseapp.com",

  projectId: "house-marketplace-app-9afab",

  storageBucket: "house-marketplace-app-9afab.appspot.com",

  messagingSenderId: "414537055001",

  appId: "1:414537055001:web:8b6c0c21738f1d46f0a388",

  measurementId: "G-9X0VXGQW79"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore()