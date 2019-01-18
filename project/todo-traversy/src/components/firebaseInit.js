import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
 firebase.initializeApp(firebaseConfig);
var firebaseApp = firebase.firestore();

firebaseApp.settings({
    timestampsInSnapshots:true
});

export default firebaseApp

