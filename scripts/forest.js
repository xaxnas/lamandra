//--------------------------------------------load-----------------------------------
document.getElementById("cover_text").childNodes[0].nodeValue = "Loading Forest...";
preload(
	"images/forest_1.png");
//---------------------------------------------forest--------------------------------
function ForestLocationOnClick() {
	LocationImage.setAttribute ('src','images/forest_1.png');
	Bot_Text.nodeValue = "You are in the forest";
	Button_9.style.visibility = 'visible';
	Button_9.childNodes[0].nodeValue = "exit";
	DisableButtons("home", "forest");
	
	Button_9.onclick = function() {
		EnableButtons("home", "forest");
		HomeLocationOnClick();
		Button_9.style.visibility = 'hidden';
	}
}
document.getElementById("forestLocationClick").onclick = ForestLocationOnClick;


