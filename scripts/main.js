var myImage = document.getElementById('img_peng1');

var ClickButton = document.getElementById("ClickButton");
var ClickedCountText = document.getElementById("ClickedCountHTML");

var ClickCount = parseFloat(get_cookie("ClickCount"));

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
//---------------------------------------------autoclick-----------------------------
var AutoClickButton = document.getElementById("AutoClickButton");
if(parseFloat(get_cookie("AutoClickCost"))===0) AutoClickCost = 50; else AutoClickCost = parseFloat(get_cookie("AutoClickCost"));
var AutoClickAmount = parseInt(get_cookie("AutoClickAmount"));
var AutoClickPower = 0.1;
AutoClickButton.onclick = function AutoClickButtonOnClick() {
	if(ClickCount>=AutoClickCost) {
		ClickCount = Math.round((ClickCount - AutoClickCost)*10)/10;
		AutoClickCost = Math.round(AutoClickCost*1.25*10)/10;
		AutoClickAmount = AutoClickAmount + 1;
		AutoClickButton.childNodes[0].nodeValue = "auto[" + AutoClickAmount + "] ["+AutoClickCost+"click]";
		ClickedCountText.childNodes[0].nodeValue = "clicked: " + ClickCount;
	}
}
//---------------------------------------------every second--------------------------
timeSecond=setInterval(EverySecondFunction, 1000);
var second=parseInt(get_cookie("second")); var secondString="00";
var minute=parseInt(get_cookie("minute")); var minuteString="00:";
var hour=parseInt(get_cookie("hour")); var hourString="00:";

function EverySecondFunction() {
	second=second+1;
	ClickCount = Math.round((ClickCount + (Math.round(AutoClickAmount*AutoClickPower*10)/10))*10)/10;
	if (second===60) {minute=minute+1; second=0;}
	if (minute===60) {hour=hour+1; minute=0;}
	if (second<10) secondString="0"+second; else secondString=second;
	if (minute<10) minuteString="0"+minute+":"; else minuteString=minute+":";
	if (hour<10) hourString="0"+hour+":"; else houreString=hour+":";
	ClickedCountText.childNodes[0].nodeValue = "clicked: " + ClickCount;
	document.getElementById("TimeElapsed").childNodes[0].nodeValue = "time elapsed: "+hourString+minuteString+secondString;
}
//---------------------------------------------cookies-------------------------------
function set_cookie (name, value) {
   document.cookie = name + "=" + encodeURI(value.toString()) + "; expires = Thu, 18 Dec 2019 12:00:00 UTC; path=/";
} //save cookie
function SaveCookie() {
	set_cookie("ClickCount", ClickCount);
	set_cookie("stopButtonTriggered", stopButtonTriggered);
	set_cookie("second", second); set_cookie("minute", minute);  set_cookie("hour", hour);
	set_cookie("AutoClickCost", AutoClickCost); set_cookie("AutoClickAmount", AutoClickAmount); set_cookie("AutoClickPower", AutoClickPower);
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
	if(stopButtonTriggered) {clearInterval(t);} else {stopButton.childNodes[0].nodeValue = "stop";}
	AutoClickButton.childNodes[0].nodeValue = "auto["+AutoClickAmount+"] ["+AutoClickCost+"click]";
	EverySecondFunction();	
	document.getElementById("cover").style.visibility = 'hidden';
}