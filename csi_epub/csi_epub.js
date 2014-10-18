window.addEventListener('load', eventWindowLoaded, false);
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'brown', 'pink'];

function eventWindowLoaded() {
   add_smudge_events();
}

function add_smudge_events() {
    // Add smudge events for smudgeable portions of drawing
    $('.smudge').bind("click", function(event) {
	// Suppress default; helpful on touchscreen devices
	event.preventDefault();
	// Get mouse position on canvas
	var x = event.pageX;
	var y = event.pageY;
       	add_smudge(this, x, y);
    });
}	

function add_smudge(smudge_context, x, y) {
    var img_left = x - 26.98294625; // offset by 50% of img height
    var img_top = y - 39.14092625; // offset by 50% of img width
    // Set random smudge color
    var smudge_color = colors[Math.floor(Math.random() * colors.length)];
    // Create smudge div, and set color class, position, and random opacity
    smudge_div = $('<div class="smudge_div"></div>').css('position', 'absolute')
	                               .addClass(smudge_color)
		                       .css('left', img_left)
	                               .css('top', img_top)
	                               .css('opacity', Math.random()/2 + 0.3);
    // Copy smudge SVG into smudge div, and add to context
    $('.smudge-svg-src svg').clone().appendTo($(smudge_div));
    $(smudge_context).append($(smudge_div));
}