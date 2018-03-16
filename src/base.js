import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDuDABE5US0ru6JXiVneE5li-9M-IBghvM",
        authDomain: "catch-of-the-day-2445a.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-2445a.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;