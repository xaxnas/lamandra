//--------------------------------------------load-----------------------------------
document.getElementById("cover_text").childNodes[0].nodeValue = "Loading Home...";
preload(
	"images/home.jpg");
HomeLocationOnClick();
//---------------------------------------------forest--------------------------------
function HomeLocationOnClick() {
	LocationImage.setAttribute ('src','images/home.jpg');
	Bot_Text.nodeValue = "You are in the home";
	
	Button_1.onclick = function() {
		alert ("yeap");
	}
}
document.getElementById("homeLocationClick").onclick = HomeLocationOnClick;
