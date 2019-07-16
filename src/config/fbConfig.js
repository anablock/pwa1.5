import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA5832_FidEMG8Zy8FStemWHll3VYAnJU8",
    authDomain: "pwa15-720a2.firebaseapp.com",
    databaseURL: "https://pwa15-720a2.firebaseio.com",
    projectId: "pwa15-720a2",
    storageBucket: "",
    messagingSenderId: "811690998022",
    appId: "1:811690998022:web:15c8fb423daae900"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase