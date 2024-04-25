console.log("HIHIHHIHI");

//import { onSnapshot } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import {doc, getFirestore, collection, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-nzyVaf0KEcsVslwC8A4sZ4HMTXJ65F8",
    authDomain: "elcaminocatalogdatabase.firebaseapp.com",
    projectId: "elcaminocatalogdatabase",
    storageBucket: "elcaminocatalogdatabase.appspot.com",
    messagingSenderId: "964635593751",
    appId: "1:964635593751:web:e2e921a2f55ef254dca052"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("LOGGED IN");
    }
    else{
        console.log("NO USER");
    }
});

export async function read(){

    const querySnapshot = await getDocs(collection(db, "Arts"));
    let x = [];
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().Description}`);
        x.push(doc.data().Description);
    });
    //input.replace(/\s/g, "");

    console.log(x);
    return x;
    //let y;
    //x.then(function(response) {y = x;});

    //console.log(y);

    // let name;
    // let des;
    // let sub;

    // const data = onSnapshot(doc(db, "Arts", "Art150"), (doc)=>{
    //     //console.log("Current Data: ", doc.data().Name);
    //     name = doc.data().Name;
    //     des = doc.data().Description;
    //     sub = doc.data().Subject;
    // });

    // let arr =[];
    // arr.push(name);
    // arr.push(des);
    // arr.push(sub);

    //return arr;
}

export async function write(){
    const cityRef = doc(db, "")
    setDoc()
}

//read();