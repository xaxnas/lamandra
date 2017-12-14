//--------------------------------------------vars-----------------------------------
var ForestLakeIsFound = (get_cookie("ForestLakeIsFound", "false")==="true");
var CaneFounded = (get_cookie("CaneFounded", "false")==="true");
var CaneCount = parseFloat(get_cookie("CaneCount", 0));
//--------------------------------------------load-----------------------------------
document.getElementById("cover_text").childNodes[0].nodeValue = "Loading Forest...";
preload(
	"images/forest_1.png");
if(CaneFounded) document.getElementById("CaneCount").style.display = 'block';
document.getElementById("CaneCount").childNodes[0].nodeValue = "Cane: "+FormatNumberTo(CaneCount);
if(HomeForestIsFound) document.getElementById("forestLocationClick").style.visibility = 'visible';
//---------------------------------------------location------------------------------
function ForestLocationOnClick() {
	LocationImage.setAttribute ('src','images/forest_1.png');
	Bot_Text.nodeValue = "You are in the forest";
	Button_1.style.visibility = 'visible'; Button_1.childNodes[0].nodeValue = "explore";
	Button_2.style.visibility = 'visible'; Button_2.childNodes[0].nodeValue = "gather";
	Button_9.style.visibility = 'visible'; Button_9.childNodes[0].nodeValue = "exit";
	DisableButtons("forest");
	
	Button_1.onclick = Button1ForestFunc;
	Button_2.onclick = Button2ForestFunc;
	Button_9.onclick = Button9ForestFunc;
}
document.getElementById("forestLocationClick").onclick = ForestLocationOnClick;
//---------------------------------------------buttons------------------------------
function Button9ForestFunc() { //exit
		EnableButtons("forest");
		HideExpectOK("oK!");
		HomeLocationOnClick();
};

function Button1ForestFunc() { //explore
	random=Randomize(0,50);
	if (random >=0 && random < 11) {
	Bot_Text.nodeValue = "event number 1 ("+(10/50) * 100+"%)";
	}
	else if(random >= 11 && random < 22) {
		Bot_Text.nodeValue = "event number 2 ("+(10/50) * 100+"%)";
	}
	else if(random >= 22 && random < 32) {
		Bot_Text.nodeValue = "event number 3 ("+(10/50) * 100+"%)";
	}
	else if(random >= 32 && random < 37) {
		if(ForestLakeIsFound) NothingHappened();
		else {
			ForestLakeIsFound = true;
			Bot_Text.nodeValue = "You found lake!";
			document.getElementById("lakeLocationClick").style.visibility = 'visible';
			HideExpectOK("Great!");
			Button_9.onclick = ForestLocationOnClick;
		}
	}
	else if(random >= 37 && random < 42) {
		Bot_Text.nodeValue = "event number 5 ("+(5/50) * 100+"%)";
	}
	else if(random >= 42 && random < 44) {
		Bot_Text.nodeValue = "event number 6 ("+(2/50) * 100+"%)";
	}
	else if(random >= 44 && random < 46) {
		Bot_Text.nodeValue = "event number 7 ("+(2/50) * 100+"%)";
	}	
	else if(random >= 46 && random < 48) {
		Bot_Text.nodeValue = "event number 8 ("+(2/50) * 100+"%)";
	}
	else if(random === 48) {
		Bot_Text.nodeValue = "event number 9 ("+(1/50) * 100+"%)";
	}
	else if(random === 49) {
		Bot_Text.nodeValue = "event number 10 ("+(1/50) * 100+"%)";
	}
	else Bot_Text.nodeValue = "event ERRROR";
}

function Button2ForestFunc() { //gather
	Bot_Text.nodeValue = "What do you want to gather in forest?";
	Button_1.childNodes[0].nodeValue = "random";
	DisableButtons("forest", "lake");
	Button_2.style.visibility = 'hidden';
	Button_1.onclick = function() {
		random=Randomize(0,8);
		if (random >=0 && random < 3) {
			GatherCane();
		}
		else if(random >= 3 && random < 5) {
			Bot_Text.nodeValue = "gather event number 2 ("+(2/8) * 100+"%)";
		}
		else if(random >= 5 && random < 7) {
			Bot_Text.nodeValue = "gather event number 3 ("+(2/8) * 100+"%)";
		}
		else if(random === 7) {
		Bot_Text.nodeValue = "gather event number 4 ("+(1/8) * 100+"%)";
		}
		else Bot_Text.nodeValue = "event ERRROR";
	}
	Button_9.onclick = ForestLocationOnClick;
}
//-----------------------------------------------events-------------------------------
function GatherCane(){
	for(i=2; i<10; i++)
	HideExpectOK("oK!");
	random=Randomize(1,11);
	Bot_Text.nodeValue = "You gathered "+random+" cane!";
	CaneCount=RoundTo(CaneCount+random);
	document.getElementById("CaneCount").childNodes[0].nodeValue = "Cane: "+FormatNumberTo(CaneCount);
	if(!CaneFounded) {document.getElementById("CaneCount").style.display = 'block'; CaneFounded=true;}
}


