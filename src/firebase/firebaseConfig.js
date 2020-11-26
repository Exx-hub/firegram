import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
	apiKey: "AIzaSyBiJdbwDDICJmOjW2fQOF7gpQAHqn4Mr54",
	authDomain: "firegram-c2a5f.firebaseapp.com",
	databaseURL: "https://firegram-c2a5f.firebaseio.com",
	projectId: "firegram-c2a5f",
	storageBucket: "firegram-c2a5f.appspot.com",
	messagingSenderId: "573976374329",
	appId: "1:573976374329:web:ec8b4845e4d00550fbf1e8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, storage, timestamp };
