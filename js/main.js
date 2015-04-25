//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
	var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
 };
   
$('#login-form a').on('click', function(){
	var userFullName = "Welcome, "+ userInfo.firstName + " "+ userInfo.lastName;			
	$('#login-form').hide();
	$('.user-info').html(userFullName).fadeIn();
});

  

    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
	$('a.view-details').on('click', function(event) {
		
		// Toggle content
		var target = $(this);
		target.parent().parent().find('.details').toggle();
		
		// Change Show/Hide text on click
  		if (target.text() == target.data("text-swap")) {
    		target.text(target.data("text-original"));
  		}else{
    		target.data("text-original", target.text());
    		target.text(target.data("text-swap"));
  		}
	});

$('button.vote').on('click', function () {
		
		var userVote = $(this).data('vote');
		
		// Tally the votes and update counters
		if (userVote == "great") {
			voteCounts.great++;
			voteCounts.total++;
		}
		else if (userVote == "greatest") {
			voteCounts.greatest++;
			voteCounts.total++;
		}
	
	var greatPercent = (voteCounts.great / voteCounts.total) * 100;
			$('.great-progress').attr("style", "width: " + greatPercent + "%");
		
		var greatestPercent = (voteCounts.greatest / voteCounts.total) * 100;
			$('.greatest-progress').attr("style", "width: " + greatestPercent + "%");
	});
}); 
