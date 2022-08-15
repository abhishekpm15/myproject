import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCr1vlcPdPaBzE6IJuRTa0Kwik9bxIVa8I",
    authDomain: "smart-india-hackathon-b850d.firebaseapp.com",
    projectId: "smart-india-hackathon-b850d",
    storageBucket: "smart-india-hackathon-b850d.appspot.com",
    messagingSenderId: "125013990650",
    appId: "1:125013990650:web:fba20f23381a0b52937d43"
  };

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)
  export default app