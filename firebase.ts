
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCJpdq8iv2al7y3hcK9phmCxElex5rJMHs",
    authDomain: "dropbox-d4b76.firebaseapp.com",
    projectId: "dropbox-d4b76",
    storageBucket: "dropbox-d4b76.appspot.com",
    messagingSenderId: "1022623191225",
    appId: "1:1022623191225:web:d7be7ca474562117044b68"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app)

export { db, storage };

