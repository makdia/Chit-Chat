import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyAr2aPqEs0k290KCg1Zoo0rKrV2KBmKWgM",
  authDomain: "live-chat-6cece.firebaseapp.com",
  projectId: "live-chat-6cece",
  storageBucket: "live-chat-6cece.appspot.com",
  messagingSenderId: "955816003085",
  appId: "1:955816003085:web:9a6559f9962b7abc7cb744",
  databaseURL: "https://live-chat-6cece-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);
//const app = initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();