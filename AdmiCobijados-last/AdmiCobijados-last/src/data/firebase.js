import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC1iygW2-djjCIlQJbx_TJ6QBsFccCPbDc",
  authDomain: "cobijado-fcf04.firebaseapp.com",
  projectId: "cobijado-fcf04",
  storageBucket: "cobijado-fcf04.appspot.com",
  messagingSenderId: "894604991829",
  appId: "1:894604991829:web:527735e0893707b59d23dc",
  measurementId: "G-VXGN84327X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);


export { db };