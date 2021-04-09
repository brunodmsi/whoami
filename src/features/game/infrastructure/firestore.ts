import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAGIxcuk0-Y_Fym_Xh-Gfnr26QhTRrDiTo',
  authDomain: 'who-am-i-e6a66.firebaseapp.com',
  databaseURL: 'https://who-am-i-e6a66.firebaseio.com',
  projectId: 'who-am-i-e6a66',
  storageBucket: 'who-am-i-e6a66.appspot.com',
  messagingSenderId: '315399215617',
  appId: '1:315399215617:web:3dbf972443a2e541eebe00',
  measurementId: 'G-NPMWJ36TZR'
}

export const app = firebase.initializeApp(config)
