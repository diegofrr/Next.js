import 'firebase/firestore';
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBEvBzje_I3VxHnTxKAaXL0m6t6c42bFAE",
    authDomain: "board-app-5d126.firebaseapp.com",
    projectId: "board-app-5d126",
    storageBucket: "board-app-5d126.appspot.com",
    messagingSenderId: "82256436341",
    appId: "1:82256436341:web:f9d19557892ee7709f2c3c",
    measurementId: "G-CWZ9R1KML6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;