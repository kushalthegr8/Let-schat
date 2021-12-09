const firebaseConfig = {
      apiKey: "AIzaSyBn8GPc-OWTDxkbGOCCzq0CsXgOPgiTzpc",
      authDomain: "kwitter-ae5b1.firebaseapp.com",
      databaseURL: "https://kwitter-ae5b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae5b1",
      storageBucket: "kwitter-ae5b1.appspot.com",
      messagingSenderId: "888094457570",
      appId: "1:888094457570:web:3583e604c1b42c719aa8bb",
      measurementId: "G-K7TJ8RSC82"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
