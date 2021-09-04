import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDjqJMkMxBIfjFquZZXQBxlH5BYCDO_6Cs",
  authDomain: "wireless-buzzer-app-fcb11.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-fcb11.firebaseio.com",
  projectId: "wireless-buzzer-app-fcb11",
  storageBucket: "wireless-buzzer-app-fcb11.appspot.com",
  messagingSenderId: "887808276621",
  appId: "1:887808276621:web:33fec4b30ff96b609e4ac4",
  measurementId: "G-TEM8J259HZ"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();