/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-16T13:43:37+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-17T15:43:00+03:00
*/


// onclick button
function myFunction1() {
   document.getElementById("externaldemo").innerHTML = "I am an externaJS";

}

var saveData = function(){
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;

  console.log("index: ", email.indexOf('a') );


  if (username.length === 0){
    alert('Enter a username');
  }
  else if(email.length === 0 || email.indexOf('@') <=0){
    alert('Enter a valid email');
  }
  else{
    var data = "SUBMIT: username: " + String(username) + " Email: " + String(email);
    alert(data);
  }
};

function say(message) {
     alert(message);
  }

function changeText(id){
  id.innerHTML = "Hurray! It Works";
}
function addNumbers(id){
  id.innerHTML = 100;
}

// var correctPhillis = function(){
// h2.addEventListener("correctName", correctNameSpelling, false);
//
// function correctSpelling(correctName) {
//     // id.innerHTML = "Hurray! It Works";
//     alert("The Correct Spelling is: " + e.type);
// }
// 
// var correctNameSpelling = new CustomEvent("correctName");
//
// h2.dispatchEvent(correctNameSpelling);
// }
