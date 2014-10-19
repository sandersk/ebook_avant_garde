window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
    spanifyText();
    bind_mouseover_and_touch();
}

function spanifyText() {
    // Get the contents of all elements with class="invisible" 
    var invis_text_children = $(".invisible").contents();
    $(invis_text_children).each(function (i) { 
	// Wrap words of each block in spans 
	wrapInSpans(this);
    });
    // Set the opacity of the parent "invisible" block to 1, as child word spans are styled with opacity of 0
    // and opacity is additive.
    $(".invisible").css("opacity", 1);
}

function wrapInSpans(the_element) {
    var element_nodetype = the_element.nodeType;
    // Check whether each node is a text node or an element node
    switch (element_nodetype) {
      case 3: // Text node 
	var element_text = $(the_element).text();
	// Empty out text content
	the_element.textContent = '';
	// Split text at space boundaries
	var element_words = element_text.split(" ");
	var words_wrapped_in_spans = ""
	$.each(element_words, function (i, word) {
	  if (word.length > 0) {
	      // Wrap each word in a span
	      words_wrapped_in_spans += '<span class="invisible_word" onclick="void(0)">' + word + '</span>' + ' ';
	  }
	});
	// Update text node with new set of words in spans
	$(the_element).wrap("<span class='invisible_span'>" + words_wrapped_in_spans + "</span>");
	break;
      case 1: // Element node
	// Recurse on any children 
	$(the_element).contents().each(function(i) { wrapInSpans(this); });
        break;
    }
}

function bind_mouseover_and_touch() {
    $(".invisible_span").bind("mouseover touchmove", function(ev) {
       // Suppress default; helpful on touchscreen devices
       ev.preventDefault();
       elem = document.elementFromPoint(ev.pageX, ev.pageY)
       // Set opacity to 1 on mouseover or touchend 
       $(elem).css("opacity", 1);
    });
} 

        

  


