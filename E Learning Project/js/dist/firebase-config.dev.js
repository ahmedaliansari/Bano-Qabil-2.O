"use strict";

// Your Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOSSP__wEeHPdxAlNg4JMfiWT4N9svvAY",
  authDomain: "elearning-2a07a.firebaseapp.com",
  projectId: "elearning-2a07a",
  storageBucket: "elearning-2a07a.appspot.com",
  messagingSenderId: "749083175488",
  appId: "1:749083175488:web:b8327dbf98205943498da5",
  measurementId: "G-ZHNB41847M"
}; // Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var storage = firebase.storage();