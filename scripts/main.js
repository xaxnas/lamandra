var myImage = document.querySelector('img');

var myHeading = document.querySelector('h1');
var myButton = document.getElementById("name");

function Migalka() {
	var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguins_2.jpg') {
      myImage.setAttribute ('src','images/penguins_2.png');
    } else {
      myImage.setAttribute ('src','images/penguins_2.jpg');
    }
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguins_2.jpg') {
      myImage.setAttribute ('src','images/penguins_2.png');
    } else {
      myImage.setAttribute ('src','images/penguins_2.jpg');
    }
}

if(localStorage.getItem('name') != null) {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'H@H@H@, hi, ' + storedName;
}

myButton.onclick = function() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'H@H@H@, hi, ' + myName;
}

var stopButton = document.getElementById("stop");
var stopButtonTriggered = false;
t=setInterval(Migalka,100);

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
