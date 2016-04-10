var PI = 3.14159;

export { PI };
export function add( a, b ) {
	return a + b;
}

export default function addAll() {
	var args = Array.from( arguments );

	var sum = 0;
	args.forEach(function(item, i) {
		sum = item + sum;
	});
	return sum;
}

var arr = [1,2,3,4,5,6];
var newArr = [];
arr.forEach(function(element, index) {
	var newElement = element*element;
	newArr.push( newElement );
});

var mapArr = arr.map(function(element,index) {
	return element * element;
});
// stuff

export function myMap(cb, arr) {
	var newArr = [];
	console.log( cb, arr );
	for( var i = 0, len = arr.length; i < len; i++ ) {
		console.log( arr[ i ] );
		var returnedValue = cb(arr[ i ], i, arr);
		newArr.push( returnedValue );
	}
	return newArr;
}

export function myFilter( cb, arr ) {
	// create a new empty array
	var filteredArray = [];
	arr.forEach((current, index) => {
		var returnedValue = cb(current, index, arr);
		if ( returnedValue === false ) {
			filteredArray.push( current )
		}
	});
	return arr;
}



