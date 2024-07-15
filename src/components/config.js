// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB1QCdqAnH3Murs4qFtSJVqhsgr2Ww4aXw",
  authDomain: "file-share-e8712.firebaseapp.com",
  projectId: "file-share-e8712",
  storageBucket: "file-share-e8712.appspot.com",
  messagingSenderId: "580641021608",
  appId: "1:580641021608:web:b289e651cbdbcb271c6c9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const imgDb = getStorage(app)