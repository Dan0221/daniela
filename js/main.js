(function(){
	"use strict";
	// console.log("SEAF Fired");

	

	var links = document.querySelectorAll("#navlist a");
	var nav = document.querySelector("#mainmenu");
	var menuButt = document.querySelector("#menuiconm");
	var smallmenuButt = document.querySelector("#menuicon");
	var menuImage = document.querySelectorAll(".menusvg");
	var video1 = document.getElementById('video1');








	function menu(){
	

		if(nav.style.display == "none"){
			TweenMax.to(nav, 1, {display:'block',opacity: 1});

			for(i = 0; i<menuImage.length; i++){
				menuImage[i].src = "img/SVG/closewhite.svg";
				menuImage[i].style.height = "30px";
			}

		}else{
			TweenMax.to(nav, 0.5, {display:'none',opacity: 0});	

			for(i = 0; i < menuImage.length; i++){
				menuImage[i].src = "img/SVG/menu.svg";
			}
		}

	}

	function closeMenu(){
		TweenMax.to(nav, 0.5, {opacity: 0, display:'none'});
		for(i = 0; i < menuImage.length; i++){
				menuImage[i].src = "img/SVG/menu.svg";
			}
	}

	menuButt.addEventListener("click", menu, false);
	smallmenuButt.addEventListener("click", menu, false);


	for (var i=0; i<links.length;  i++){
		links[i].addEventListener("click", closeMenu, false);
	}

	
})();


function videoPausePlayHandler(e) {
	if (e.type == 'playing') {
 	 video1.setAttribute("controls","controls");
	} else if (e.type == 'pause') {
   video1.removeAttribute("controls");
	}
}

video1.addEventListener('playing', videoPausePlayHandler, false);
video1.addEventListener('pause', videoPausePlayHandler, false);

