
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
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name -"+ Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItemm("room_name");
      localStorage.removeItemm("room_name");
      window.location = "index.html";
}