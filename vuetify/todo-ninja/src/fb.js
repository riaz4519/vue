import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDyBJ0ZJIWt4adxl0POqn4aKuT37CFZyHo",
    authDomain: "todo-ninjs.firebaseapp.com",
    databaseURL: "https://todo-ninjs.firebaseio.com",
    projectId: "todo-ninjs",
    storageBucket: "todo-ninjs.appspot.com",
    messagingSenderId: "778405607654",
    appId: "1:778405607654:web:37047bfe6d42377c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/*db.settings({ timestampsInSnapshots: true});*/

export default db;