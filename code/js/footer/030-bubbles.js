/**
 * Generate a random number from between a range
 *
 * @param  {integer} min - Lowest possible number
 * @param  {integer} max - Highest possible number
 *
 * @return {integer}     - The random number
 */
function randomBetween( min, max ) {
	return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

var bubbles = document.querySelectorAll('.js-header__bubble');
var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[ 0 ].clientWidth;
var bubblePlay = new TimelineMax();

// iterate over all .js-header__bubble DOM nodes
for( var i = 0; i < bubbles.length; i++ ) {

	var bubble = TweenMax.fromTo( // animate this node
		bubbles[ i ],               // target
		randomBetween( 6, 35 ),     // duration
		{                           // from
			x: randomBetween( 40, ( x + 40 ) ),
			y: 770,
		},
		{                           // to
			x: randomBetween( 40, ( x + 40 ) ),
			y: -90,
			repeat: -1,
			ease: Linear.easeNone,
		}
	);

	bubblePlay.add( bubble, ( i + 1 ) / 10 );
}

bubblePlay.time( 100 ); // forward by 100s
