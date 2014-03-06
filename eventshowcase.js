if (window.addEventListener){ 
	window.addEventListener("load",showevents,false);
}else {
	window.attachEvent("onload", showevents);
}

$(function() {
		"use strict";
		$(".rslides").responsiveSlides({
				auto: true,
				pagination: true,
				fade: 1000,
				speed: 500,
				pause: true
		});
});

function loadmore(){
	"use strict";
	var hash = window.location.hash;
	if(hash === "" || hash === "#login"){
		hash="#bristol";
	}else if(hash === "#close" || hash.substring(0,4) === "#pop"){
		var val = ($("#citysel")[0]).value;
		hash="#" + val;
	}
	
	var b = document.getElementById('event-button');
	if(b.textContent === 'Load more!'){
		b.textContent = 'Load less!';
		console.log("Loading more events..");
	}else{
		b.textContent = 'Load more!';
		console.log("UnLoading additional events..");
	}
	
	var id = hash + "-more-events";
	id = id.replace('#','');
	var e = document.getElementById(id);
	if(e.style.display == 'inline-block'){
		e.style.display = 'none';
	}else{
		e.style.display = 'inline-block';
	}
	return false;
}

function showevents(){
	"use strict";
	var hash = window.location.hash;
	if(hash != "" && hash != "#login" 
		&& hash != "#close" && hash.substring(0,4) != "#pop" && hash != "#modal"){
		$('.city-events').hide();
		$(hash).show();
		
		$('html').animate({scrollTop: $(hash).offset().top},'slow');
	}
		
	/*console.log("SVG Animation begins..");*/
	/* svg image animation */
	/*
	<svg class="svg-holder" id="svg2" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
	<image x="0" y="0" width="100" height="65" xlink:href="./car2.png">
	<animate attributeName="x" from="1100" to="10" dur="15s" fill="remove" repeatCount="indefinite"></animate>
	</image>
	</svg>
	*/
	if(document.getElementById("svg2"))
	{
		var imgtag = "./car2.png";
		var img = document.createElementNS('http://www.w3.org/2000/svg','image');
		img.setAttributeNS(null,'height','65');
		img.setAttributeNS(null,'width','100');
		img.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href',imgtag);
		img.setAttributeNS(null,'x','0');
		img.setAttributeNS(null,'y','0');
		img.setAttributeNS(null, 'visibility', 'visible');
		var animate = document.createElementNS('http://www.w3.org/2000/svg','animate');
		animate.setAttributeNS(null,'attributeName','x');
		animate.setAttributeNS(null,'from',1100);
		animate.setAttributeNS(null,'to',10);
		animate.setAttributeNS(null,'dur','15s');
		animate.setAttributeNS(null,'fill','remove');
		animate.setAttributeNS(null,'repeatCount','indefinite');
		img.appendChild(animate);
		
		document.getElementById("svg2").appendChild(img);
	}
};

$(window).on('hashchange', function() {
		showevents();
});

/*$("#bristol-sortdate", "#london-sortdate", "#manchester-sortdate", "#others-sortdate").bind('change', function() { 
loadmore();
});*/

function changecity(sel){
	"use strict";
	var value = sel.options[sel.selectedIndex].value; 
	/*console.log("City selection changed to" + value);*/
	window.location.href="#" + value;
	return false;
}


/* file upload */
function fileSelected() {
	"use strict";
        var file = document.getElementById('fileToUpload').files[0];
}

function uploadFile() {
	"use strict";
	$("#popfm").hide();
	alert('Event created successfully! Pending POST implementation.');
	window.location.href="#popcl";
}

/* construction */
function construction(){
	"use strict";
	/*console.log("Page under construction.");*/
	alert('This page is under construction');
}

function learnmore(){
	"use strict";
	/*console.log("Learn more.");*/
	window.location.href="#modal";
}

function closemodal(){
	"use strict";
	/*console.log("Modal closed.");*/
	window.location.href="#";
}

function loadimage(){
	"use strict";
	/*console.log("load image.");*/
	alert("Functionality to slide the carousel image is pending.");
}

function bookevent(){
	"use strict";
	/*console.log("Event booking.");*/
	alert("Functionality to book an event is pending.");
}

function postcomment(){
	"use strict";
	/*console.log("Post event comment.");*/
	alert("Functionality to post comment is pending.");
}

function login(){
	"use strict";
	/*console.log("login try..");*/
	var val = validateForm();
	if(val === true){
		window.location.href="#";
	}
}

function validateForm()
{
	"use strict";
	/*console.log("validating form..");*/
	var x=document.forms["form-1ogin"]["email"].value;
	var y=document.forms["form-1ogin"]["password"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length || y.length == 0)
	{
		alert("Invalid login! Please retry.");
		return false;
	}else{
		return true;
	}
}
