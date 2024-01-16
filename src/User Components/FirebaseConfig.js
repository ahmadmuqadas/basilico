
import { initializeApp } from "firebase/app";
import { getDatabase, } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyDg6epn4TbxlHGZDefWWBVpHDP9_6D5MJ8",
  authDomain: "basilico-cec2c.firebaseapp.com",
  projectId: "basilico-cec2c",
  storageBucket: "basilico-cec2c.appspot.com",
  messagingSenderId: "197240661905",
  appId: "1:197240661905:web:8d45ff7c1d3967b7779c30"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db,}

