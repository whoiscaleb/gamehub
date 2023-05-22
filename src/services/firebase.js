import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAX3nxS1Mv5dcCpC3TX215h_F0dTW3QVys",
    authDomain: "gamehub-auth.firebaseapp.com",
    projectId: "gamehub-auth",
    storageBucket: "gamehub-auth.appspot.com",
    messagingSenderId: "601862046505",
    appId: "1:601862046505:web:b6610a2819ab8993d16d38"
  };

  //activate firebase App
    firebase.initializeApp(firebaseConfig);
  
  //config settings
    const auth = firebase.auth();

  //provider
  const provider = new firebase.auth.GoogleAuthProvider();

  // set up auth functions
  function login() {
    return auth.signInWithPopup(provider);
  }

  function logout() {
    return auth.signOut();
  }

export { login, logout, auth };