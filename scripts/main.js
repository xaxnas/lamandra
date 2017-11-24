var myImage = document.getElementById('img_peng1');

var ClickButton = document.getElementById("ClickButton");
var ClickedCountText = document.getElementById("ClickedCountHTML");

var ClickCount = parseFloat(get_cookie("ClickCount", 0));

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
//---------------------------------------------autoclick-----------------------------
var AutoClickButton = document.getElementById("AutoClickButton");
var AutoClickCost = parseFloat(get_cookie("AutoClickCost", 50));
var AutoClickAmount = parseInt(get_cookie("AutoClickAmount", 0));
var AutoClickPower = 0.1;
AutoClickButton.onclick = function AutoClickButtonOnClick() {
	if(ClickCount>=AutoClickCost) {
		ClickCount = RoundTo(ClickCount - AutoClickCost);
		AutoClickCost = RoundTo(AutoClickCost*1.25);
		AutoClickAmount = AutoClickAmount + 1;
		AutoClickButton.childNodes[0].nodeValue = "auto[" + AutoClickAmount + "] ["+AutoClickCost+"click]";
		ClickedCountText.childNodes[0].nodeValue = "clicked: " + ClickCount;
	}
}
//---------------------------------------------every second--------------------------
timeSecond=setInterval(EverySecondFunction, 1000);
var second=parseInt(get_cookie("second", 0)); var secondString="00";
var minute=parseInt(get_cookie("minute", 0)); var minuteString="00:";
var hour=parseInt(get_cookie("hour", 0)); var hourString="00:";

function EverySecondFunction() {
	second=second+1; 
	ClickCount = RoundTo(ClickCount + (AutoClickAmount*AutoClickPower));
	if (second===60) {minute=minute+1; second=0;}
	if (minute===60) {hour=hour+1; minute=0;}
	if (second<10) secondString="0"+second; else secondString=second;
	if (minute<10) minuteString="0"+minute+":"; else minuteString=minute+":";
	if (hour<10) hourString="0"+hour+":"; else houreString=hour+":";
	ClickedCountText.childNodes[0].nodeValue = "clicked: " + ClickCount;
	document.getElementById("TimeElapsed").childNodes[0].nodeValue = "time elapsed: "+hourString+minuteString+secondString;
}
//---------------------------------------------round---------------------------------
function RoundTo(value) {
	return Math.round(value*10)/10;
}
//---------------------------------------------cookies-------------------------------
function set_cookie (name, value) {
   document.cookie = name + "=" + encodeURI(value.toString()) + "; expires = Thu, 18 Dec 2019 12:00:00 UTC; path=/";
} //save cookie
function SaveCookie() {
	set_cookie("ClickCount",ClickCount);
	set_cookie("stopButtonTriggered",stopButtonTriggered);
	set_cookie("second",second); set_cookie("minute",minute);  set_cookie("hour",hour);
	set_cookie("AutoClickCost",AutoClickCost); set_cookie("AutoClickAmount",AutoClickAmount); set_cookie("AutoClickPower",AutoClickPower);
} //add here what to save
var SaveButton = document.getElementById("SaveButton");
SaveButton.onclick = SaveCookie; //call by click

function get_cookie (cookie_name, defaut) {
    var nameEQ = cookie_name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURI(c.substring(nameEQ.length,c.length));
    }
    return defaut;
} //read cookies
//-----------------------------------------preload--------------------------------------------
var images = new Array()

function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}
preload(
	"images/penguins_2.jpg",
	"images/penguins_2.png"
)
//-----------------------------------------start page values----------------------------------
window.onload = function load_start_cookie_from_page() {
	if(stopButtonTriggered) {clearInterval(t);} else {stopButton.childNodes[0].nodeValue = "stop";}
	AutoClickButton.childNodes[0].nodeValue = "auto["+AutoClickAmount+"] ["+AutoClickCost+"click]";
	preload();
	EverySecondFunction();	
	document.getElementById("cover").style.visibility = 'hidden';
}