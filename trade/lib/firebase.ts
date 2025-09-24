
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "studio-5479991345-e9d96",
  appId: "1:103782352365:web:ecd54351c1e383bac093e4",
  apiKey: "AIzaSyCpIjbAPFpfbBGQv9CSobA4n8-BkLZAcKw",
  authDomain: "studio-5479991345-e9d96.firebaseapp.com",
};

// Initialize Firebase
let app;
if (typeof window !== "undefined") {
    // Client-side
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
} else {
    // Server-side
    app = getApps().find(app => app.name === 'DEFAULT') || initializeApp(firebaseConfig);
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
