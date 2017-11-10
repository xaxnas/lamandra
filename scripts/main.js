var myImage = document.querySelector('img');

var myHeading = document.querySelector('h1');
var myButton = document.getElementById("name");

var t=setInterval(Migalka,100);

var stopButton = document.getElementById("stop");
var stopButtonTriggered = false;

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguins_2.jpg') {
      myImage.setAttribute ('src','images/penguins_2.png');
    } else {
      myImage.setAttribute ('src','images/penguins_2.jpg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'H@H@H@, hi, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'H@H@H@, hi, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

stopButton.onclick = function() {
	if (stopButtonTriggered) {
		t=setInterval(Migalka,100);
		stopButton.childNodes[0].nodeValue = "stop";
		stopButtonTriggered = false;
	} else{
		clearInterval(t);
		stopButton.childNodes[0].nodeValue = "start";
		stopButtonTriggered = true;
	}
}

function Migalka() {
	var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguins_2.jpg') {
      myImage.setAttribute ('src','images/penguins_2.png');
    } else {
      myImage.setAttribute ('src','images/penguins_2.jpg');
    }
}
