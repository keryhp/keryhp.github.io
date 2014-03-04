if (window.addEventListener){ 
	window.addEventListener("load",showevents,false);
}else {
	window.attachEvent("onload", showevents);
}

$(function() {
		"use strict";
$(".rslides").responsiveSlides();
});

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 1000,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});


function loadmore(){
	"use strict";
	var hash = window.location.hash;
	if(hash === "" || hash === "#login"){
	 hash="#bristol";
	}else if(hash === "#close" || hash.substring(0,4) === "#pop"){
		var val = $("#citysel").options[$("#citysel").selectedIndex].value;
		hash="#" + "val";
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
       	       && hash != "#close" && hash.substring(0,4) != "#pop"){
    $('.city-events').hide();
    $(hash).show();
    $('html').animate({scrollTop: $(hash).offset().top},'slow');
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
	window.location.href="#" + value;
	return false;
}


/* file upload */
function fileSelected() {
        var file = document.getElementById('fileToUpload').files[0];
      }

      function uploadFile() {
      	      $("#popfm").hide();
      	            	      alert('Event created successfully! Pending POST implementation.');
      	              	window.location.href="#popcl";
      }
      
      /* construction */
      function construction(){
      	      alert('This page is under construction');
      }
