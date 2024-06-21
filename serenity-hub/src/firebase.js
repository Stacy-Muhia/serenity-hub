const firebaseConfig = {
    apiKey: '<API_KEY>',
    authDomain: '<AUTH_DOMAIN>',
    projectId: '<PROJECT_ID>',
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();
  export const db = firebase.firestore();
  