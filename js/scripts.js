
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
	    		$('.lessons-list').append('<li class="list-group-item lessons-item">' + tag_info + '</li>');
			}
		};
	    console.log(unique_tags);
	});

	// Select lesson functionality
	lessons = []
	$(document).on('click', '.lessons-item', function() {
		$(this).toggleClass('active');
		const index = lessons.indexOf($(this).text());
		if (index > -1) {
			lessons.splice(index, 1);
		} else {
			lessons.push($(this).text());
		}
	});

	// Select options to hide functionality
	hidden = ['Character'];
	$(document).on('click', '.hidden-item', function() {
		$(this).toggleClass('active');
		const index = hidden.indexOf($(this).text());
		if (index > -1) {
			hidden.splice(index, 1);
		} else {
			hidden.push($(this).text());
		}
		$("#reveal-" + $(this).text().toLowerCase()).toggleClass("reveal");
	});

	// Create list of characters of only necessary lessons
	$('.btn-primary').click(function() {
		if (lessons.length == 0) {
			alert("Please select atleast one lesson");
		} else {
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
			$("#progress").text(characters.length-1 + " words left");

			shuffle(characters);
			refreshWords(characters);
		}
		
	});

	// Quiz functionality
	// Reveal the hidden text
	$("#reveal-pinyin").click(function() {
		$("#reveal-pinyin").text(characters[0][0]);
	});
	$("#reveal-english").click(function() {
		$("#reveal-english").text(characters[0][1]);
	});
	$("#reveal-character").click(function() {
		$("#reveal-character").text(characters[0][2]);
		$("#reveal-character").addClass('large-text');
	});

    // if incorrect then queue word next again and shuffle word again into list
    $(".btn-danger").click(function() {
    	if (characters.length > 1) {
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
    	if (characters.length > 1) {
    		characters.shift();
			refreshWords(characters);
			$("#progress").text(characters.length-1 + " words left");
		} else {
			alert('You have finished all words!');
		}
	});


	// Helper functions
	function refreshWords(array) {
		$("#reveal-pinyin").text(characters[0][0]);
		$("#reveal-english").text(characters[0][1]);
		$("#reveal-character").text(characters[0][2]);
		$("#reveal-character").removeClass('large-text');
		for (var i = 0; i < hidden.length; i++) {
			$("#reveal-"+hidden[i].toLowerCase()).text("Reveal "+hidden[i]);
			$("#reveal-"+hidden[i].toLowerCase()).addClass("light-btn");
		};
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

