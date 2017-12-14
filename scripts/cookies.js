//---------------------------------------------cookies-------------------------------
function set_cookie (name, value) {
   document.cookie = name + "=" + encodeURI(value.toString()) + "; expires = Thu, 18 Dec 2019 12:00:00 UTC; path=/";
} //save cookie
function SaveCookie() {
	set_cookie("ClickCount",ClickCount);
	set_cookie("second",second); set_cookie("minute",minute);  set_cookie("hour",hour);
	set_cookie("AutoClickCost",AutoClickCost); set_cookie("AutoClickAmount",AutoClickAmount); set_cookie("AutoClickPower",AutoClickPower); 
	set_cookie("ForestLakeIsFound",ForestLakeIsFound);
	set_cookie("HomeForestIsFound",HomeForestIsFound);
	set_cookie("CaneCount",CaneCount);
	set_cookie("CaneFounded",CaneFounded);
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