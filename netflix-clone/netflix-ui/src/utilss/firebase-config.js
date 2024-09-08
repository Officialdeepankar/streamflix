// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// we will take out authentication 
import{getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBdHpL9u8VHnoldsjj7VOSLRZG59POHW2k",
  authDomain: "react-netflix-clone-318bf.firebaseapp.com",
  projectId: "react-netflix-clone-318bf",
  storageBucket: "react-netflix-clone-318bf.appspot.com",
  messagingSenderId: "323630671608",
  appId: "1:323630671608:web:6514e7910413c648bf3d0d",
  measurementId: "G-W3FDE0QTCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);// initialize karo 
export const firebaseAuth=getAuth(app);//app ko authenticate karo


/* 
**Samajhne ke liye:**
1. **SDKs:** SDKs ka matlab hota hai "Software Development Kits" jo ki ek tarah ke tools hote hain jo development ko asaan banane me madad karte hain.
  
2. **Firebase ka Configuration Object:** Ye woh settings hain jo bataate hain ki hamara application Firebase se kaise connect karega. Jaise ki API key, project ID, aur dusre important information.

3. **Firebase ko Initialize karna:** `initializeApp` function ko use karke Firebase ko hamare application ke sath connect karte hain. Iske baad hamara application Firebase ke sath communicate kar sakta hai.

4. **Firebase Authentication Instance:** `getAuth` function se ham ek authentication instance banate hain, jise ham `firebaseAuth` naam se export karte hain. Iska use user ko authenticate karne ke liye hota hai.

To summarise, ye code Firebase ko hamare React application ke sath connect karta hai, aur authentication ke liye tayyar kar deta hai. Ismein humne authentication ke liye zaruri SDKs ko import kiya aur Firebase ko hamare application ke sath link kiya. 
*/