import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Modificare aici
import { getFirestore } from "firebase/firestore";
// Nu mai avem nevoie de importurile specifice pentru React Native
// Nu mai avem nevoie de importul pentru messaging, deoarece este specific pentru React Native

// Configurația Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB_dm_AnUkmA_C6tP-oS098jr5nyDT0c2I",
  authDomain: "coral-daca3.firebaseapp.com",
  projectId: "coral-daca3",
  storageBucket: "coral-daca3.appspot.com",
  messagingSenderId: "154615933866",
  appId: "1:154615933866:web:3ee4d38d9deaa5c75119d3"
};

// Inițializarea aplicației Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obținerea instanțelor pentru autentificare și firestore
export const FIREBASE_AUTH = getAuth(firebaseApp);
export const FIREBASE_FIRESTORE = getFirestore(firebaseApp);

// Notă: getToken() nu mai este utilizat în Firebase pentru web
// Dacă aveți nevoie de token-uri pentru mesagerie, ar trebui să consultați documentația Firebase pentru web privind Cloud Messaging