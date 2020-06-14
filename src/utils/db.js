import firebase from "firebase";
import axios from 'axios';

const firebaseConfig = {
    apiKey: "AIzaSyBpce4ufQbBaCutze2sFehI-6pLS68m88c",
    authDomain: "orgsentia.firebaseapp.com",
    databaseURL: "https://orgsentia.firebaseio.com",
    projectId: "orgsentia",
    storageBucket: "orgsentia.appspot.com",
    messagingSenderId: "314123693401",
    appId: "1:314123693401:web:81d7b27d2634e2d4723048"
};

export const getData = async (url) => {
    return await axios.get(url);
}

export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();