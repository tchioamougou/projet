import { firebaseConfig } from "../config/firebase";
import firebase from "firebase";
import Vue from "vue";

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
//db.settings({ timestampsInSnapshots: true });
Vue.prototype.$db = db;
