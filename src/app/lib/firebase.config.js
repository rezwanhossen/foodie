import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKHFvVYNcb1wCJUGGnt5CClquKNY5e1aU",
  authDomain: "task-in-odyssey.firebaseapp.com",
  projectId: "task-in-odyssey",
  storageBucket: "task-in-odyssey.firebasestorage.app",
  messagingSenderId: "910678724682",
  appId: "1:910678724682:web:042d5778b8291dc844d6b3",
  measurementId: "G-CNZWFLPZ6X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
