
import firebase from 'firebase'

import 'firebase/firestore'

const config = {
    apiKey: 'AIzaSyDeclorv6775JvNwWC2r5pnzYifmboiESs',
    authDomain: 'todo-app-fe8df.firebaseapp.com',
    databaseURL: 'https://todo-app-fe8df.firebaseio.com',
    projectId: 'todo-app-fe8df',
    storageBucket: 'todo-app-fe8df.appspot.com',
    messagingSenderId: '250334099596'
};

 firebase.initializeApp(config)

export default firebaseapp.firestore()
