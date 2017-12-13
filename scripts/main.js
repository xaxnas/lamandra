//---------------------------------------------general vars--------------------------
var LocationImage = document.getElementById('img_location');

var Bot_Text = document.getElementById("body_center_bot_text").childNodes[0]; //bot text

var Button_1 = document.getElementById("bot_button_1"), Button_2 = document.getElementById("bot_button_2"), Button_3 = document.getElementById("bot_button_3"); //bot button path
var Button_4 = document.getElementById("bot_button_4"), Button_5 = document.getElementById("bot_button_5"), Button_6 = document.getElementById("bot_button_6");
var Button_7 = document.getElementById("bot_button_7"), Button_8 = document.getElementById("bot_button_8"), Button_9 = document.getElementById("bot_button_9");
//---------------------------------------------click button--------------------------
var ClickButton = document.getElementById("ClickButton");
var ClickedCountText = document.getElementById("ClickedCountHTML");

var ClickCount = parseFloat(get_cookie("ClickCount", 0));

ClickButton.onclick = function ClickButtonOnClick() {
	ClickCount = ClickCount + 1;
	ClickedCountText.childNodes[0].nodeValue = "clicked: " + FormatNumberTo(ClickCount);
}
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
		AutoClickButton.childNodes[0].nodeValue = "auto[" + AutoClickAmount + "] ["+FormatNumberTo(AutoClickCost)+"click]";
		ClickedCountText.childNodes[0].nodeValue = "clicked: " + FormatNumberTo(ClickCount);
	}
}
//---------------------------------------------location------------------------------
var LocationName = "home";

function DisableButtons(){
	for (i = 0; i < DisableButtons.arguments.length; i++) {
		document.getElementById(DisableButtons.arguments[i]+"LocationClick").disabled=true;
	}
} //expample - DisableButtons("home", "forest");
function EnableButtons(){
	for (i = 0; i < EnableButtons.arguments.length; i++) {
		document.getElementById(EnableButtons.arguments[i]+"LocationClick").disabled=false;
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
	ClickedCountText.childNodes[0].nodeValue = "clicked: " + FormatNumberTo(ClickCount);
	document.getElementById("TimeElapsed").childNodes[0].nodeValue = "time elapsed: "+hourString+minuteString+secondString;
}
//---------------------------------------------round---------------------------------
function RoundTo(value) {
	return Math.round(value*10)/10;
}
function FormatNumberTo(value) {
	if(((value*10) % 10) === 0) {return value.toString() + ".0";} else {return value.toString();}
}
//-----------------------------------------preload--------------------------------------------
var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}
document.getElementById("cover_text").childNodes[0].nodeValue = "Loading Main Script...";
//preload("images/penguins_2.jpg", "images/penguins_2.png");
AutoClickButton.childNodes[0].nodeValue = "auto["+AutoClickAmount+"] ["+FormatNumberTo(AutoClickCost)+"click]";
EverySecondFunction();	