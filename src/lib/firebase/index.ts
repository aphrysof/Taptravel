
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "taptravel-29f0c.firebaseapp.com",
    projectId: "taptravel-29f0c",
    storageBucket: "taptravel-29f0c.firebasestorage.app",
    messagingSenderId: "570163504466",
    appId: "1:570163504466:web:caeef04f594a476691468b",
    measurementId: "G-HJF7R6822L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);