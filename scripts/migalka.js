function Migalka() {
	var mySrc = LocationImage.getAttribute('src');
    if(mySrc === 'images/penguins_2.jpg') {
      LocationImage.setAttribute ('src','images/penguins_2.png');
    } else {
      LocationImage.setAttribute ('src','images/penguins_2.jpg');
    }
}

LocationImage.onclick = function myImageOnClick() {
    var mySrc = LocationImage.getAttribute('src');
    if(mySrc === 'images/penguins_2.jpg') {
      LocationImage.setAttribute ('src','images/penguins_2.png');
    } else {
      LocationImage.setAttribute ('src','images/penguins_2.jpg');
    }
}

var stopButton = document.getElementById("stop");
var stopButtonTriggered = (get_cookie("stopButtonTriggered", "true")==="true");

t=setInterval(Migalka,100);


function stopButtonOnClick() {
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
stopButton.onclick = stopButtonOnClick;

set_cookie("stopButtonTriggered",stopButtonTriggered); //cookie

if(stopButtonTriggered) {clearInterval(t);} else {stopButton.childNodes[0].nodeValue = "stop";} //preload