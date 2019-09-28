menu.onclick = function mmFunc() {
	var a = document.getElementById('mmtopnav');
	var b = document.getElementById('myS');
	if (a.className === "mm") {
		a.className += " responsive";
		b.className += " responsive";
	} else {
		a.className = "mm";
		b.className = "topnav";
	}
}