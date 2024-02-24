"use strict";

// Firebase storage reference
var storageRef = storage.ref(); // Form submission

document.getElementById("registrationForm").addEventListener("submit", function _callee(event) {
  var name, email, password, imageFile, userCredential, user, imageRef, imageUrl;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault(); // Prevent default form submission

          name = document.getElementById("name").value;
          email = document.getElementById("email").value;
          password = document.getElementById("password").value;
          imageFile = document.getElementById("image").files[0];
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(firebase.auth().createUserWithEmailAndPassword(email, password));

        case 8:
          userCredential = _context.sent;
          user = userCredential.user; // Upload image to Firebase Storage

          imageRef = storageRef.child("images/".concat(user.uid, "/").concat(imageFile.name));
          _context.next = 13;
          return regeneratorRuntime.awrap(imageRef.put(imageFile));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(imageRef.getDownloadURL());

        case 15:
          imageUrl = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(db.collection("users").doc(user.uid).set({
            name: name,
            email: email,
            imageUrl: imageUrl
          }));

        case 18:
          alert("Registration successful!"); // Optionally redirect to another page
          // window.location.href = "home.html";

          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](5);
          console.error("Error registering user:", _context.t0.message);
          alert("Registration failed. Please try again later.");

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 21]]);
});