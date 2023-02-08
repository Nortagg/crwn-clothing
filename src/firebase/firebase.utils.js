import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyB2GQMYkhkfQ2Rdd4VvARPbU6xWorM4wwo",
  authDomain: "crwn-db-547a3.firebaseapp.com",
  projectId: "crwn-db-547a3",
  storageBucket: "crwn-db-547a3.appspot.com",
  messagingSenderId: "21357009472",
  appId: "1:21357009472:web:cac72cdf4da4ce8ca3dda5",
  measurementId: "G-1JBV72EPQ9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
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
