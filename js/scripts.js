
$(document).ready(function() {
	// Grab list of characters of New Practical Chinese Reader Book from json file
	$.getJSON("https://emilyrb.github.io/chinese-character-quiz/NPCR.json")
	.done(function( data ) {
		all_characters = data;
		unique_tags = [];
		// Grab list of lesson names
		for (var i = 0; i < all_characters.length; i++) {
			tag_info = all_characters[i]["Tags"].substring(0,22);
			if (!tag_info.includes("Supplementary") &&
				!unique_tags.includes(tag_info)) {
				unique_tags.push(tag_info);
	    		$('.list-group').append('<li class="list-group-item">' + tag_info + '</li>');
			}
		};
	    console.log(unique_tags);
	});

	// Select lesson functionality
	lessons = []
	$(document).on('click', '.list-group-item', function() {
		$(this).toggleClass('active');
		const index = lessons.indexOf($(this).text());
		if (index > -1) {
			lessons.splice(index, 1);
		} else {
			lessons.push($(this).text());
		}
	});

	// Create list of characters of only necessary lessons
	$('.btn-primary').click(function(){
		characters = [];
		for (var i = 0; i < all_characters.length; i++) {
			tag_info = all_characters[i]["Tags"];
			if (!tag_info.includes("Supplementary") &&
				lessons.includes(tag_info.substring(0,22))) {
				characters.push([all_characters[i]["Pinyin"],all_characters[i]["English"],all_characters[i]["Hanzi"]]);
			}
		};

		// Refresh page to character quiz	
		$("#landing").hide();
		$("#content").show();
		total_characters = characters.length;
		$("h3").text("00/" + total_characters);

		shuffle(characters);
		refreshWords(characters);
	});

	// Quiz functionality
	// Reveal the character
	$("#reveal").click(function() {
		$("#reveal").text(characters[0][2]);
		$("#reveal").addClass('large-text');
	});

	completed_words = []; // for stats
	first_time_correct = 0;

    // if incorrect then queue word next again and shuffle word again into list
    $(".btn-danger").click(function() {
    	if (characters.length > 0) {
    		completed_words.push(characters[0][2]);
	    	current_pair = characters[0];
	    	shuffle(characters);
	    	characters.unshift(current_pair);
			refreshWords(characters);
		} else {
			alert('You have finished all words!');
		}
	});
    // if correct then remove word and shuffle
    $(".btn-success").click(function() {
    	if (characters.length > 0) {
    		if (!completed_words.includes(characters[0][2])) {
    			first_time_correct++;
    			completed_words.push(characters[0][2]);
    			$("h3").text(first_time_correct + "/" + total_characters);
			}
    		characters.shift();
			refreshWords(characters);
		} else {
			alert('You have finished all words!');
		}
	});


	// Helper functions
	function refreshWords(array) {
		$("h1").text(characters[0][0]);
		$("h2").text(characters[0][1]);
		$("#reveal").text("Reveal");
		$("#reveal").removeClass('large-text');
	};

	function shuffle(array) {
		let currentIndex = array.length,  randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex != 0) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex--;

	    // And swap it with the current element.
	    [array[currentIndex], array[randomIndex]] = [
	    	array[randomIndex], array[currentIndex]];
	  }

	  return array;
	}

});

