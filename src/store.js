import {createStore , combineReducers, compose} from 'redux'
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase , firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

const firebaseConfig= {
    apiKey: "AIzaSyCTtA-4VCJtpDIoU7RhsHwNiO33r_pqm_s",
    authDomain: "reactclientpanel-d33af.firebaseapp.com",
    databaseURL: "https://reactclientpanel-d33af.firebaseio.com",
    projectId: "reactclientpanel-d33af",
    storageBucket: "reactclientpanel-d33af.appspot.com",
    messagingSenderId: "721580308670",
    appId: "1:721580308670:web:9b40480fc70dbc0b75c6ef",
    measurementId: "G-EWHRW8JGZ3"
};
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  };

  firebase.initializeApp(firebaseConfig);
 // const firestore = firebase.firestore();
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);


  const createStoreWithFirebase = compose(
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase)
  ) (createStore);

  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  });

  const initialState= {};

  const store = createStoreWithFirebase(rootReducer, initialState, compose(
      reactReduxFirebase(firebase),
     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  ));


  export default store;
