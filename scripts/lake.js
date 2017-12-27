//--------------------------------------------vars-----------------------------------
//var ForestLakeIsFound = (get_cookie("ForestLakeIsFound", "false")==="true");
var FlintFounded = (get_cookie("FlintFounded", "false")==="true");
var FlintCount = parseFloat(get_cookie("FlintCount", 0));
//--------------------------------------------load-----------------------------------
document.getElementById("cover_text").childNodes[0].nodeValue = "Loading Lake...";
preload(
	"images/lake.jpg");
if(FlintFounded) document.getElementById("FlintCount").style.display = 'block';
document.getElementById("FlintCount").childNodes[0].nodeValue = "Flint: "+FormatNumberTo(FlintCount);
if(ForestLakeIsFound) document.getElementById("lakeLocationClick").style.visibility = 'visible';
//DisableButtons("lake");
//---------------------------------------------location------------------------------
function LakeLocationOnClick() {
	LocationImage.setAttribute ('src','images/lake.jpg');
	Bot_Text.nodeValue = "You are in the lake";
	MakeVisibleButtons(1,2,9);
	Button_1.childNodes[0].nodeValue = "explore";
	Button_2.childNodes[0].nodeValue = "gather";
	Button_9.childNodes[0].nodeValue = "exit";
	EnableButtons("forest");
	DisableButtons("lake");
	
	Button_1.onclick = Button1LakeFunc;
	Button_2.onclick = Button2LakeFunc;
	Button_9.onclick = Button9LakeFunc;
}
document.getElementById("lakeLocationClick").onclick = LakeLocationOnClick;
//---------------------------------------------buttons------------------------------
function Button9LakeFunc() { //exit
		EnableButtons("lake");
		HideExpectOK("oK!");
		HomeLocationOnClick();
};

function Button1LakeFunc() { //explore
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
		if(true) NothingHappened();
		else {
			/*
			
			*/
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

function Button2LakeFunc() { //gather
	Bot_Text.nodeValue = "What do you want to gather in lake?";
	HideExpectOK("exit");
	DisableButtons("forest", "lake");
	Button_1.style.visibility = 'visible';
	Button_1.childNodes[0].nodeValue = "random";
	Button_1.onclick = function() {
		random=Randomize(0,8);
		if (random >=0 && random < 3) {
			GatherFlint();
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
	if(FlintFounded) {
		Button_2.onclick = GatherFlint; 
		Button_2.style.visibility = 'visible'; Button_2.childNodes[0].nodeValue = "flint"; }
	Button_9.onclick = LakeLocationOnClick;
}
//-----------------------------------------------events--------------------------------
function GatherFlint(){
	HideExpectOK("oK!");
	random=Randomize(0,10);
	if(random < 8) Bot_Text.nodeValue = "You walk around the beach, but found nothing";
	else {
		Bot_Text.nodeValue = "You walk around the beach and found "+RoundTo(random/Randomize(2,9))+" flint!";
		FlintCount=RoundTo(FlintCount+(random/Randomize(2,9)));
		document.getElementById("FlintCount").childNodes[0].nodeValue = "Flint: "+FormatNumberTo(FlintCount);
		if(!FlintFounded) {document.getElementById("FlintCount").style.display = 'block'; FlintFounded=true;}
	}
	Button_9.onclick = Button2LakeFunc;
}