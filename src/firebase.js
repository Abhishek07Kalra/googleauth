import firebase from 'firebase';

const firebaseConfig = {
    // your credentials :)
  };

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};
