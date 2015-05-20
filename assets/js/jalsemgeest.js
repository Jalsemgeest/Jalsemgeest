
var resume;
var contact;
var movingDown = true;
var movingRight = true;
var newTop = 0;
var newLeft = 0;

var resumeMoving;
var contactMoving;

function checkAnimation() {
	if ($(window).width() <= 768) {
		stopResume();
	} else {
		startResume();
	}
}


function onLoad() {
	
	$(window).resize(checkAnimation);
	//$('#gostop').on	
	
	//$('#resume').animate({top:"88.75%", left:"96.1%", easing:"linear"}, 1000);
	
	//var maxTop = 88.75;
	//var maxLeft = 96.1;
	
	//alert($(window).height() + " " + $(window).width());

	startResume();
	
}

function stopResume() {
	$('#resume').stop();
	$('#contact').stop();
	clearInterval(resumeMoving);
	clearInterval(contactMoving);
	document.getElementById("gostop").onclick = startResume;
	document.getElementById("gostop").text = "Start";
}

function startResume() {
	
	document.getElementById("gostop").onclick = stopResume;
	document.getElementById("gostop").text = "Pause";
	
	resume = document.getElementById("resume");
	contact = document.getElementById("contact");
	
	contactMoving = makeMove('contact', 5000);
	resumeMoving = makeMove('resume', 5000);
	
	$(function() {
		$('#resume').bind("touchstart", function(event) {
			alert(event.touches.length);
		});
	});
	
}

function makeMove(id, time) {
	return setInterval(function() {
		var offset = $('#'+id+'').offset();
		newTop = offset.top;
		newLeft = offset.left;
		var maxWidth = $(window).width() - resume.clientWidth;
		var maxHeight = $(window).height() - resume.clientHeight;
		
		// var boxTop = $('.main-area').offset().top;
		// var boxLeft = $('.main-title').offset().left;
		// var boxRight = $('.main-title').offset().left + $('.main-title').outerWidth(true);
		// var boxBottom = $('.main-area').offset().top + $('.main-area').outerHeight(true);
		
		if (newTop >= maxHeight) { // || (newTop >= boxTop && newTop <= boxBottom)) {
			movingDown = false;
		} else if (newTop <= 0) { // || (newTop >= boxTop && newTop <= boxBottom)) {
			movingDown = true;
		}
		
		if (newLeft >= maxWidth) { // || (newLeft >= boxLeft && newLeft <= boxRight)) {
			movingRight = false;
		} else if (newLeft <= 0) { // || (newLeft >= boxLeft && newLeft <= boxRight)) {
			movingRight = true;
		}
		
		if (movingDown) {
			// Top is going up
			if (movingRight) {
				// Left is going up
				while (newTop <= maxHeight && newLeft <= maxWidth) {
					newTop += 1;
					newLeft += 1;// Checks out I think
					// Checking if it's hitting the top or left side of the middle
					// if ((newTop >= boxTop && newTop <= boxBottom) && (newLeft >= boxLeft && newLeft <= boxRight)) {
						// break;
					// }
				}
			} else {
				// Left is going down
				while (newTop <= maxHeight && newLeft >= 0) {
					newTop += 1;
					newLeft -= 1;
					// if ((newTop >= boxTop && newTop <= boxBottom) && (newLeft >= boxLeft && newLeft <= boxRight)) {
						// break;
					// }
				}
			}
		}
		else {
			// Top is going down
			if (movingRight) {
				// Left is going up
				while (newTop >= 0 && newLeft <= maxWidth) {
					newTop -= 1;
					newLeft += 1;
					// if ((newTop >= boxTop && newTop <= boxBottom) && (newLeft >= boxLeft && newLeft <= boxRight)) {
						// break;
					// }
				}
			} else {
				// Left is going down
				while (newTop >= 0 && newLeft >= 0) {
					newTop -= 1;
					newLeft -= 1;
					// if ((newTop >= boxTop && newTop <= boxBottom) && (newLeft >= boxLeft && newLeft <= boxRight)) {
						// break;
					// }
				}
			}
		}
		
		//alert(newTop + " " + newLeft);
		//alert($(window).height() + " " + $(window).width());
		$('#'+id+'').animate({top:newTop+"px", left:newLeft+"px", easing:"linear"}, time);
		
	}, time);
}

function collission(div1, div2) {
	var x1 = $div1.offset().left;
  	var y1 = $div1.offset().top;
  	var h1 = $div1.outerHeight(true);
  	var w1 = $div1.outerWidth(true);
  	var b1 = y1 + h1;
  	var r1 = x1 + w1;
  	var x2 = $div2.offset().left;
  	var y2 = $div2.offset().top;
  	var h2 = $div2.outerHeight(true);
  	var w2 = $div2.outerWidth(true);
  	var b2 = y2 + h2;
  	var r2 = x2 + w2;
    
  	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) { return false; }
	
	return true;
}

window.onload = onLoad;

/*var content = 0;
var mainStyle;

function onLoad() {
	if (content == 0) {
		mainStyle = document.getElementById("main-site");
	}
	content++;
	if (content == 1) {
		addContent("This is some content to add", document.getElementsByClassName("container")[0], 300, "section");
	} else if (content == 2) { 
		addContent(".section { color:white; }", document.getElementsByClassName("container")[0], 150);
	} else if (content == 3) {
		addContent("Final bit of content!", document.getElementsByClassName("container")[0], 75);
	}
}

function addContent(content, toAddTo, speed, theClass) {
	var i = 0;
	var Speed = Math.random() * speed;
	var addConent = setInterval(function() {
		toAddTo.innerHTML = toAddTo.innerHTML + content[i];
		i++;
		if (i == content.length) {
			clearInterval(addConent);
			var x = document.createElement("SPAN");
			x.innerHTML = toAddTo.lastChild.nodeValue;
			if (theClass) {
				x.className = theClass;
			}
			toAddTo.removeChild(toAddTo.lastChild);
			toAddTo.appendChild(x);
			mainStyle.innerHTML = toAddTo.innerHTML;
			onLoad();
		}
		document.getElementById("num").innerHTML = i;
		Speed = Math.random() * speed;
	}, Speed);
}*/

/*window.onload = onLoad;*/
