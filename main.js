/**
* @Author: Phillis Kiragu <PKiragu>
* @Date:   2016-08-16T13:43:37+03:00
* @Email:  pkiragu@cytonn.com
* @Last modified by:   PKiragu
* @Last modified time: 2016-08-16T23:38:15+03:00
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

}
