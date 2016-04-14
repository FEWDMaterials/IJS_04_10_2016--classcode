import Slider from './Slider';

// let t = Slider('.js-slider1');
// let s = Slider('.js-slider2');

document.querySelector('.js-stop2').addEventListener('click', () => {
	console.log( s, t );
	// s.skipTo(2);
})
document.querySelector('.js-stop1').addEventListener('click', () => {
	console.log( s, t );
	// t.stop();
})

// write a function that returns the number 5
// this function should ONLY be called 3 times
function callThreeTimes() {
	var numTimesCalled = 0;
	return function() {
		if ( numTimesCalled === 3 ) {
			return;
		}
		numTimesCalled++;
		return 5;
	}
}


function callNTimes( n, cb ) {
	var numTimesCalled = 0;
	return function() {
		var args = Array.from( arguments );
		if ( numTimesCalled === n ) {
			return;
		}

		numTimesCalled++;
		return cb.apply(null, args);
	}
}
var getN = callNTimes( 3, function( N ) {
	return N;
});
console.log( getN(1) + getN(2) + getN(3) );

var divs = document.querySelectorAll('.divs');
for ( var i = 0; i < 3; ++i ) {
	divs[ i ].addEventListener('click', (function(index) {
		return function() {
			alert( index );
		}
	})( i ));
}

