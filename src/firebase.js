import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBl-36_xKfcyvGKI8jsHF0B7gOjY5Xk3Qw',
  authDomain: 'bible-quotes-21bcc.firebaseapp.com',
  projectId: 'bible-quotes-21bcc',
  storageBucket: 'bible-quotes-21bcc.appspot.com',
  messagingSenderId: '932788749468',
  appId: '1:932788749468:web:d0ddd19dea42295c17d959'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
