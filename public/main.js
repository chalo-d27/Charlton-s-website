// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyA47tm74ZrBAGK74QQbiQQ8h5W1ZPVTDOA",
    authDomain: "charlton-e511b.firebaseapp.com",
    databaseURL: "https://charlton-e511b.firebaseio.com",
    projectId: "charlton-e511b",
    storageBucket: "charlton-e511b.appspot.com",
    messagingSenderId: "517541109616",
    appId: "1:517541109616:web:20457088999ba7507439b5",
    measurementId: "G-RKJS2PSB6L"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name,  email, message);
  
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name,  email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }