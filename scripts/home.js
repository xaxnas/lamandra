//--------------------------------------------vars-----------------------------------
var HomeForestIsFound = (get_cookie("HomeForestIsFound", "false")==="true");
//--------------------------------------------load-----------------------------------
document.getElementById("cover_text").childNodes[0].nodeValue = "Loading Home...";
preload(
	"images/home.jpg");
HomeLocationOnClick();
//---------------------------------------------forest--------------------------------
function HomeLocationOnClick() {
	EnableButtons("forest", "lake");
	LocationImage.setAttribute ('src','images/home.jpg');
	Bot_Text.nodeValue = "You are in the home";
	Button_9.style.visibility = 'hidden';
	Button_1.style.visibility = 'visible'; Button_1.childNodes[0].nodeValue = "explore";
	
	Button_1.onclick = Button1HomeFunc;
}

//---------------------------------------------buttons------------------------------
function Button1HomeFunc() {
	random=Randomize(0,10);
	if (random >=0 && random < 3) {
	Bot_Text.nodeValue = "event number 1 ("+(3/10) * 100+"%)";
	}
	else if(random >= 3 && random < 5) {
		Bot_Text.nodeValue = "event number 2 ("+(2/10) * 100+"%)";
	}
	else if(random >= 5 && random < 7) {
		Bot_Text.nodeValue = "event number 3 ("+(2/10) * 100+"%)";
	}
	else if(random >= 7 && random < 9) {
		if(HomeForestIsFound) NothingHappened();
		else {
			HomeForestIsFound = true;
			Bot_Text.nodeValue = "You found forest!";
			document.getElementById("forestLocationClick").style.visibility = 'visible';
			HideExpectOK("exit");
			Button_9.onclick = Button9HomeFunc;
			DisableButtons("forest");
		}
	}
	else if(random === 9) {
		Bot_Text.nodeValue = "event number 10 ("+(1/10) * 100+"%)";
	}
	else Bot_Text.nodeValue = "event ERRROR";
}

function Button9HomeFunc() {
	HomeLocationOnClick();
}
//-----------------------------------------------events--------------------------------