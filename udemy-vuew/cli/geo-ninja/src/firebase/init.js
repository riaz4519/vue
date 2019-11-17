import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBygjsq09xwpV-vo8_qOaK00G5xvFYsSDo",
    authDomain: "udemy-geo-ninja-3d403.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninja-3d403.firebaseio.com",
    projectId: "udemy-geo-ninja-3d403",
    storageBucket: "udemy-geo-ninja-3d403.appspot.com",
    messagingSenderId: "417884173383",
    appId: "1:417884173383:web:7547f6dedcfa93cf1fed62",
    measurementId: "G-KW8YPEKW4E"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.analytics();

export default firebaseApp.firestore()


