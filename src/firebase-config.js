import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBG_yibsshTEudftgranYKYbTUr5tJSmec",
    authDomain: "slogan-generator-7cfca.firebaseapp.com",
    projectId: "slogan-generator-7cfca",
    storageBucket: "slogan-generator-7cfca.appspot.com",
    messagingSenderId: "103878545217",
    appId: "1:103878545217:web:f54a01b73bfecfa4149bc0"
  };
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);
