$(document).ready( function() {

/* ANIMATION STATION ACTION */

	setTimeout(function(){
		$('#lil_tree1').animationStation({
    		fps : 14
    	});
	},500);

    $('#big_tree1').animationStation({
    	fps : 14
    });

    setTimeout(function(){
	    $('#lil_tree2').animationStation({
	    	fps : 14
	    });
    },800);

/* OTHER STUFF */

});
