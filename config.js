//Configuracion firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// web configuracion firebase 
const firebaseConfig = {
    apiKey: "AIzaSyA_Gi_o3sGSw7IbG8IcOjPYluZVxt9uSZg",
    authDomain: "test-1873a.firebaseapp.com",
    projectId: "test-1873a",
    storageBucket: "test-1873a.appspot.com",
    messagingSenderId: "167351453264",
    appId: "1:167351453264:web:4915f1e85acaf1f173b355",
    measurementId: "G-W1LFXQ9MPS"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};