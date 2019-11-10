//import firebase
import firebase from 'firebase'
//import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDoo0Q8hZQ7CpY7rKM6rdWCQYvh4kB-9as",
    authDomain: "udemy-smoothies-8d046.firebaseapp.com",
    databaseURL: "https://udemy-smoothies-8d046.firebaseio.com",
    projectId: "udemy-smoothies-8d046",
    storageBucket: "udemy-smoothies-8d046.appspot.com",
    messagingSenderId: "259494452589",
    appId: "1:259494452589:web:40a1e2fa457630c7058e64",
    measurementId: "G-FKBK82HQZ0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//timestamp in snapshots
//firebaseApp.firestore().settings({timestampsInSnapshots:true})
firebaseApp.analytics();

export default firebaseApp.firestore()
