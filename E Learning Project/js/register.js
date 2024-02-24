// Firebase storage reference
const storageRef = storage.ref();

// Form submission
document.getElementById("registrationForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const imageFile = document.getElementById("image").files[0];

  try {
    // Create user in Firebase Authentication
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Upload image to Firebase Storage
    const imageRef = storageRef.child(`images/${user.uid}/${imageFile.name}`);
    await imageRef.put(imageFile);

    // Get image URL
    const imageUrl = await imageRef.getDownloadURL();

    // Save user data to Firestore
    await db.collection("users").doc(user.uid).set({
      name: name,
      email: email,
      imageUrl: imageUrl
    });

    alert("Registration successful!");
    // Optionally redirect to another page
    // window.location.href = "home.html";
  } catch (error) {
    console.error("Error registering user:", error.message);
    alert("Registration failed. Please try again later.");
  }
});
