window.addEventListener('load', activate_randomizer, false);

// REPLACE ARRAY ITEMS WITH YOUR OWN CHOICES FOR RANDOM CONTENT SNIPPETS
var choices = ["And these few precepts in thy memory", "Look thou character. Give thy thoughts no tongue,", "Nor any unproportion&#x2019;d thought his act.", "Be thou familiar, but by no means vulgar.", "Those friends thou hast, and their adoption tried,", "Grapple them unto thy soul with hoops of steel;", "But do not dull thy palm with entertainment", "Of each new-hatch&#x2019;d, unfledg&#x2019;d comrade. Beware", "Of entrance to a quarrel; but, being in,", "Bear&#x2019;t that the opposed may beware of thee.", "Give every man thine ear, but few thy voice:", "Take each man&#x2019;s censure, but reserve thy judgment.", "Costly thy habit as thy purse can buy,", "But not express&#x2019;d in fancy; rich, not gaudy:", "For the apparel oft proclaims the man;", "And they in France of the best rank and station", "Are most select and generous chief in that.", "Neither a borrower nor a lender be:", "For loan oft loses both itself and friend;", "And borrowing dulls the edge of husbandry.", "This above all,&#x2014;to thine own self be true;", "And it must follow, as the night the day,", "Thou canst not then be false to any man.", "Farewell: my blessing season this in thee!"];

function activate_randomizer() {
  // Bind click event to randomizer button
  $('button#randomize').bind('click', randomize_content);
}

function randomize_content() {
   var randomized_choices = window.knuthShuffle(choices.slice(0));
   add_randomly_selected_content(randomized_choices);
}

function add_randomly_selected_content(randomized_choices) {
    // For each element with a class of random, drop in some random content from random_content.json
    $('.random').each( function(i) {
	// Some basic error handling here
	if ((i + 1) > randomized_choices.length) { alert("No matching content for " + (i + 1) + "th random element"); }
        $(this).hide();
	$(this).html(randomized_choices[i]);
	$(this).show();
    });
}