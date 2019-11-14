import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAEarnBjl9jT4bBtnslm4ValKrTOypXroU",
    authDomain: "ninja-chat-9be08.firebaseapp.com",
    databaseURL: "https://ninja-chat-9be08.firebaseio.com",
    projectId: "ninja-chat-9be08",
    storageBucket: "ninja-chat-9be08.appspot.com",
    messagingSenderId: "567613526744",
    appId: "1:567613526744:web:bdaa3094a3804f486d3dad",
    measurementId: "G-P63REWWF2Q"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.analytics();

export default firebaseApp.firestore()
