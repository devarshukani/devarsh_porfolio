letterCarousel('.Frist1','.big-title');
fun1('.Frist2','.big-title');
letterCarousel('.Frist3','.big-title');
fun1('.Frist4','.big-title');

// $('#maindiv1').width($('#div1').width());


function letterCarousel(parent_cls,child_cls) {
		var e = jQuery(parent_cls+' '+child_cls),
		t = jQuery(window).height();
		jQuery(window).on("scroll", function() {
			if (jQuery(parent_cls).length) {
				var t = jQuery(document).scrollTop() + jQuery(window).height(),
				n = jQuery(parent_cls).offset().top;
				
				if (n <= t) {
					var i = jQuery(document).scrollTop() - n + jQuery(window).height();
					var scroll = i - 150;
					var scroll_slow = scroll + ((scroll/70)/100);
					var img_scroll = scroll_slow * 1;
					e.css({
						transform: "translateX(" + img_scroll + "px)"
					})
				}
			}
		});
	}

  function fun1(parent_cls,child_cls) {
		var e = jQuery(parent_cls+' '+child_cls),
		t = jQuery(window).height();
		jQuery(window).on("scroll", function() {
			if (jQuery(parent_cls).length) {
				var t = jQuery(document).scrollTop() + jQuery(window).height(),
				n = jQuery(parent_cls).offset().top;
				
				if (n <= t) {
					var i = jQuery(document).scrollTop() - n + jQuery(window).height();
					var scroll = i - 0;
					var scroll_slow = scroll + ((scroll/70)/100);
					var img_scroll = scroll_slow * 1;
					e.css({
						transform: "translateX(-" + img_scroll + "px) "

					})
				}
			}
		});
	}

	function sendEmail() 
	{
		window.location = "mailto:me.devarshukani@gmail.com"
	}


function changeDef(){
	document.getElementById("change1").style.color = "#6080CF";
	document.getElementById("change2").style.color = "#6080CF";
	document.getElementById("change1").style.transitionDuration = "0.6s";
	document.getElementById("change2").style.transitionDuration = "0.6s";
}

function resetDef(){
	document.getElementById("change1").style.color = "#777777";
	document.getElementById("change2").style.color = "#777777";
	document.getElementById("change1").style.transitionDuration = "0.6s";
	document.getElementById("change2").style.transitionDuration = "0.6s";
}

function changeskills(){
	document.getElementById("skillshover1").style.color = "#6080CF";
	document.getElementById("skillshover2").style.color = "#6080CF";
	document.getElementById("skillshover1").style.transitionDuration = "0.6s";
	document.getElementById("skillshover2").style.transitionDuration = "0.6s";
}

function resetskills(){
	document.getElementById("skillshover1").style.color = "#777777";
	document.getElementById("skillshover2").style.color = "#777777";
	document.getElementById("skillshover1").style.transitionDuration = "0.6s";
	document.getElementById("skillshover2").style.transitionDuration = "0.6s";
}


// Reload page at start 

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#devarshukani';
        window.location.reload();
    }
}