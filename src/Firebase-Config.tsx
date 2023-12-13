import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXcxRfR0TM-metJlpVaFOBowW2X0eqAig",
  authDomain: "whatsapp-chat-crud.firebaseapp.com",
  projectId: "whatsapp-chat-crud",
  storageBucket: "whatsapp-chat-crud.appspot.com",
  messagingSenderId: "1027715081358",
  appId: "1:1027715081358:web:94a59ca9f27bb5fe8255df",
  measurementId: "G-XMTKE19YH0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
