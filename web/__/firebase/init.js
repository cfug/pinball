if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyDxqqYY-0iDvy7yJbQ-VhZ6lYgw3siwypg",
  "authDomain": "pinball-flutter-cn.firebaseapp.com",
  "databaseURL": "",
  "messagingSenderId": "684673920035",
  "projectId": "pinball-flutter-cn",
  "storageBucket": "pinball-flutter-cn.appspot.com"
});

firebase.firestore().settings({ experimentalForceLongPolling: true });