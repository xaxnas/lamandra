//--------------------------------------------vars-----------------------------------
var ForestLakeIsFound = (get_cookie("ForestLakeIsFound", "false")==="true");
//--------------------------------------------load-----------------------------------
document.getElementById("cover_text").childNodes[0].nodeValue = "Loading Lake...";
preload(
	"images/forest_1.png");
if(ForestLakeIsFound) document.getElementById("lakeLocationClick").style.visibility = 'visible';
DisableButtons("lake");
//---------------------------------------------forest--------------------------------

//---------------------------------------------buttons------------------------------

//-----------------------------------------------events--------------------------------