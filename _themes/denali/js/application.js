$(function() {
    $( "#about" ).tabs({
        event: "mouseover",
        show: { effect: "fade", duration: 400 }
    });
});

$(function() {
    $( "#process" ).tabs({
        event: "click",
        show: { effect: "fade", duration: 400 }
    });
});


$(document).ready(function () {

	$(".process-copy").hide();
	
	$(".circle-nav a").click(function() {
		$(".intro-copy").hide();
		$(".process-copy").show();
	});

    $('.rs-carousel').carousel({
        itemsPerTransition: '1',
        pagination: false, 
        insertPrevAction: function () { return $('<a href="#" class="rs-carousel-action rs-carousel-action-prev"><span aria-hidden="true" class="icon-arrow-left"></span></a>').appendTo('.grid-1.arrows.prev'); },
        insertNextAction: function () { return $('<a href="#" class="rs-carousel-action rs-carousel-action-next"><span aria-hidden="true" class="icon-untitled"></span></a>').appendTo('.grid-1.arrows.next'); }
    });
});
