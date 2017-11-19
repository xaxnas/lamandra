var myImage = document.getElementById('img_peng1');

var ClickButton = document.getElementById("ClickButton");
var ClickedCountText = document.getElementById("ClickedCountHTML");

var ClickCount = parseInt(get_cookie("ClickCount"));

function Migalka() {
	var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguins_2.jpg') {
      myImage.setAttribute ('src','images/penguins_2.png');
    } else {
      myImage.setAttribute ('src','images/penguins_2.jpg');
    }
}

myImage.onclick = function myImageOnClick() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguins_2.jpg') {
      myImage.setAttribute ('src','images/penguins_2.png');
    } else {
      myImage.setAttribute ('src','images/penguins_2.jpg');
    }
}

ClickButton.onclick = function ClickButtonOnClick() {
	ClickCount = ClickCount + 1;
	ClickedCountText.childNodes[0].nodeValue = "clicked: " + ClickCount;
}

var stopButton = document.getElementById("stop");
var stopButtonTriggered;
if(get_cookie("stopButtonTriggered")==="false") {
	stopButtonTriggered = false;
	} else {
		stopButtonTriggered = true;
	}
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

//---------------------------------------------cookies-------------------------------
function set_cookie (name, value) {
   document.cookie = name + "=" + encodeURI(value.toString()) + "; expires = Thu, 18 Dec 2019 12:00:00 UTC; path=/";
} //save cookie
function SaveCookie() {
	set_cookie("ClickCount", ClickCount);
	set_cookie("stopButtonTriggered", stopButtonTriggered);
} //add here what to save
var SaveButton = document.getElementById("SaveButton");
SaveButton.onclick = SaveCookie; //call by click

function get_cookie (cookie_name) {
    var nameEQ = cookie_name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURI(c.substring(nameEQ.length,c.length));
    }
    return 0;
} //read cookies
//-----------------------------------------start page values----------------------------------
window.onload = function load_start_cookie_from_page() {
	ClickedCountText.childNodes[0].nodeValue = "clicked: " + ClickCount;
	if(stopButtonTriggered) {
		clearInterval(t); } else {stopButton.childNodes[0].nodeValue = "stop";}
		
	document.getElementById("cover").style.visibility = 'hidden';
}