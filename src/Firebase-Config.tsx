import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDN-ENeF73lmkGS20PowOda-5V_pMayJPY",
  authDomain: "learningfirebase-21.firebaseapp.com",
  databaseURL: "https://learningfirebase-21-default-rtdb.firebaseio.com",
  projectId: "learningfirebase-21",
  storageBucket: "learningfirebase-21.appspot.com",
  messagingSenderId: "566446176690",
  appId: "1:566446176690:web:374d70e00689addf780cab",
  measurementId: "G-Z4XC8XBF88",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
