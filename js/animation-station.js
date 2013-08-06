(function($) {

	$.fn.animationStation = function(options) {

		var THIS = this;

		//GET IMAGE SPECS

			//GET WIDTH OF DIV
			var setWidth = THIS.css('width');


			//GET WIDTH OF SET BACKGROUND IMAGE
			var bgImgWidth = 0

			var bgImgPath = THIS.css('background-image').replace('url', '').replace('(', '').replace(')', '').replace('"', '').replace('"', '');

			var tempImg = '<img id="tempImg" src="' + bgImgPath + '"/>';

			$('body').append(tempImg);
			$('#tempImg').hide();
	      	bgImgWidth = $('#tempImg').width();
	      	$('#tempImg').remove();

	      	var setWidth = parseInt(setWidth);

	      	var maxFrames = bgImgWidth / setWidth;


		//SETTING UP OPTIONS

			//SET DEFAULT SETTINGS
				var defaults = {
					fps : 24,
					play_count: 1
				},		

				//MERGE DEFAULTS WITH OPTIONS
					settings = $.extend({}, defaults, options);

			//FPS

				//CONVERT FPS TO FRAMES PER SECOND
					var FPS = 1000 / settings.fps;

			//PLAY_COUNT

				//SET PLAY_COUNT AS VARIABLE
					var PLAY_COUNT = settings.play_count;

				//PUT PLAY_COUNT TO USE
					if( PLAY_COUNT == 0 ){

						PLAY_COUNT = 99999999999999999999;

					};

					maxFrames = maxFrames * PLAY_COUNT;


		//LOOP THROUGH AND CHANGE BACKGROUND POSITION

			var moveBgXPosition = 0;

			var i = 0;

			var interval = setInterval(function(){

				var newBgPosition = -moveBgXPosition+'px, 0';

				THIS.css('background-position', newBgPosition);

				moveBgXPosition = moveBgXPosition + setWidth;

				i++;

				if(i >= maxFrames) clearInterval(interval);

			}, FPS);



	};

}(jQuery));