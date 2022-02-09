import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(

{
    apiKey: "AIzaSyBWLolyz8CuKpLl4xd7nhsc9i393oQ5bkg",
    authDomain: "reactstore-89b1d.firebaseapp.com",
    projectId: "reactstore-89b1d",
    storageBucket: "reactstore-89b1d.appspot.com",
    messagingSenderId: "548151110546",
    appId: "1:548151110546:web:477a3dd7c8e981090a2f4b"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
