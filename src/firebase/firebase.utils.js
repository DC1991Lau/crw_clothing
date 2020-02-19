import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAh3UGYw0f2YOYnpLuoeZp4JabRAt0o-oE",
	authDomain: "crwn-db-aff16.firebaseapp.com",
	databaseURL: "https://crwn-db-aff16.firebaseio.com",
	projectId: "crwn-db-aff16",
	storageBucket: "crwn-db-aff16.appspot.com",
	messagingSenderId: "131094957917",
	appId: "1:131094957917:web:cac047d04209b4aac762b4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	console.log(snapshot);

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
