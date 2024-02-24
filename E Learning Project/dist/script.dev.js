"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");

var _firebaseDatabase = require("https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js");

// Import the necessary functions from Firebase SDK
// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDY5O3PLB8lQWOHbIxnC4xR_xZA2xAO4ok",
  authDomain: "elearning-986f7.firebaseapp.com",
  projectId: "elearning-986f7",
  storageBucket: "elearning-986f7.appspot.com",
  messagingSenderId: "267730305309",
  appId: "1:267730305309:web:189913ac3137634f3821f4",
  measurementId: "G-TPMVJ3P1J9"
}; // Initialize Firebase

var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var db = (0, _firebaseDatabase.getDatabase)(app); // Add event listener to the submit button

document.getElementById("submit").addEventListener("click", function (e) {
  // Get the values of name, email, and password input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value; // Set the user data in the Firebase Realtime Database

  (0, _firebaseDatabase.set)((0, _firebaseDatabase.ref)(db, "users/" + name), {
    username: name,
    email: email,
    password: password
  }).then(function () {
    // This block will execute when the user is successfully registered
    alert("Registration successful!");
  })["catch"](function (error) {
    // This block will execute if there's an error during registration
    console.error("Error registering user:", error);
    alert("Registration failed. Please try again later.");
  });
});