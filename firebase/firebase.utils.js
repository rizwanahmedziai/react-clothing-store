import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDyH6z2AYmf9HJ8ngiJFZLudA6u669bQxQ',
	authDomain: 'rcs-db.firebaseapp.com',
	databaseURL: 'https://rcs-db.firebaseio.com',
	projectId: 'rcs-db',
	storageBucket: 'rcs-db.appspot.com',
	messagingSenderId: '425737822380',
	appId: '1:425737822380:web:c6f2280f64a1ddda757f09'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
