import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBALnF_QR9zZGAydmVucfWk1xjmzLNiNTM",
    authDomain: "signal-clone-23dc7.firebaseapp.com",
    projectId: "signal-clone-23dc7",
    storageBucket: "signal-clone-23dc7.appspot.com",
    messagingSenderId: "761542286959",
    appId: "1:761542286959:web:784285d9dfc96407bbf79a",
    measurementId: "G-DPQ8SXWZ7G"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
