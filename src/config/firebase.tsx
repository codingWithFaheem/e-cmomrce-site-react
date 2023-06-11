
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCUDYysSG2_1kypngMHfwI2AaPgxH4ajxg",
  authDomain: "honychair-ecommerce.firebaseapp.com",
  projectId: "honychair-ecommerce",
  storageBucket: "honychair-ecommerce.appspot.com",
  messagingSenderId: "235079521372",
  appId: "1:235079521372:web:eee93743069e8ee32dc299"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)
