import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBs0zDrtw2tiLSGU5BnoAEBzHJNC-2b74k",
    authDomain: "chatapp-92f8b.firebaseapp.com",
    projectId: "chatapp-92f8b",
    storageBucket: "chatapp-92f8b.appspot.com",
    messagingSenderId: "798527238336",
    appId: "1:798527238336:web:f4cc6f063f0c1cb09d3d25",
}).auth();