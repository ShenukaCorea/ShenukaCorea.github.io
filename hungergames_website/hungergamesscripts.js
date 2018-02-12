// scroll down to the video when the watch title is clicked
$('#watchtitle').on('click', function(event) {
    var target = $('#watchtarget');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// scroll down to about section when the about title is clicked
$('#abouttitle').on('click', function(event) {
    var target = $('#abouttarget');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// scroll down to cast/crew section when the about title is clicked
$('#castcrewtitle').on('click', function(event) {
    var target = $('#castcrewtarget');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// scroll back to the top header when the text 'back to top' is clicked
$('#backtotop').on('click', function(event) {
    var target = $('#hungergamestitle');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// makes the gif play again from the beginning on mouse-over
$("#hungergamestitle").on('mouseenter', function(event) {
	this.src = 'title.gif';
});
//makes thought bubble appear when the mouse enters the image
$("#shantanudrawing").on('mouseenter', function(event) {
	this.src = 'shantanuchips.jpg';
});
//makes thought bubble disappear when the mouse leaves the image
$("#shantanudrawing").on('mouseleave', function(event) {
	this.src = 'shantanu.jpg';
});


