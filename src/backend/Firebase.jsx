// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1h3Y74qEXqOS0KuJWcNUW-9S6RxyCSUo',
  authDomain: 'module-2-project-c3008.firebaseapp.com',
  projectId: 'module-2-project-c3008',
  storageBucket: 'module-2-project-c3008.appspot.com',
  messagingSenderId: '528652526086',
  appId: '1:528652526086:web:109e7644c0f6e708ae9987',
  measurementId: 'G-KNRLC43C0R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
