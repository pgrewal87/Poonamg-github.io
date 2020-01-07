// 1.	When the header element is clicked
// a. Slide up the header


function headerSlide() {
    $('header').slideUp();
}
$('header').on('click', headerSlide);

// When the user scrolls down 20px from the top of the document, slide down the navbar



// 2. When the "Throw a party" button is clicked
// a. Remove the boring class from the section with the id boxes
// b. Fade out all of the divs in #row4 slowly (hint: your selector could be $('#row4 div') )
// c. Add a class snazzy in your css with some styles and add it to all items with the class .box
// c. Change the styling of the span inside of #box3 by adding a class fun (and style that fun class in CSS)
// SlideUp all the h2s on the page quickly
// Add the selected class [already in the CSS] to the divs in #row3
// BONUS: Add a paragraph that says "Time to party!!!" to all boxes with class .add-para (Hint: you'll need to look up the append() method)
// BONUS: Add an h4 that says "Wild!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
function partyTime() {
    $('#boxes').removeClass('boring');
    $('#row4 div').fadeOut('slow');
    $('.box').addClass('snazzy');
    $('#box3').addClass('fun');
    $('h2').slideUp('fast');
    $('#row3').addClass('selected');
    $('.add-para').append('<p>"Time to Party!!!"</p>');
    $('#box12').prepend('<h4>"Wild!</h4>');
}
$('#party-time').on('click', partyTime);



// 3. When the anchor in #box2 is clicked (hint: your selector could be $('#box2 a') )
// a. Fade in the footer slowly

function footFade() {
    $('footer').fadeIn();
}
$('#box2 a').on('click', footFade);

// 4. When the "Party Pooper" button is clicked
// a. Slide down the header
// b. Fade out the footer
// c. Show the divs in #row4
// d. Add the boring class to the element with the id boxes
// e. Remove the snazzy class from everything
// f. Remove the fun class from the span in #box3
// g. Remove the selected class from the divs in #row3
// h. Slide down all of the h2s
// BONUS: If you completed the above bonus tasks, look up "remove jquery"
// and then see if you can remove the paragraphs and h3s that you added in.
// make sure to ONLY remove those paragraphs and h3s you added, not all the paragraphs and h3s!

function partyPooper() {
    $('header').slideDown();
    $('footer').fadeIn();
    $('#row4 div').show('slow');
    $('.boxes').addClass('boring');
    $('.snazzy').removeClass();
    $('.fun').removeClass();
    $('h2').slideDown();

}
$('#reset').on('click', partyPooper);