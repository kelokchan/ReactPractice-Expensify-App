import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDbi2M_TMHVhb985sIuh-zoee5XOv0_gao',
  authDomain: 'expensify-bfacd.firebaseapp.com',
  databaseURL: 'https://expensify-bfacd.firebaseio.com',
  projectId: 'expensify-bfacd',
  storageBucket: 'expensify-bfacd.appspot.com',
  messagingSenderId: '592473087987',
  appId: '1:592473087987:web:b495a710000e530d0d7c86',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
