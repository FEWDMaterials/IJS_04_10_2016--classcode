import addAll, {
	add,
	PI,
	myMap,
	myFilter,
} from './utils';
// 
// console.log( PI );
// console.log( add(1,2) ); 

// var sum = add(1,2)
// console.log( sum );

// console.log( addAll(1,2,3,4,5,6,7,8,9,10))

var newMap = myMap(function(element, index, arr) {
	console.log(element, index);
	return element + '!!!';
}, [1,4,9]);

console.log( newMap );

var odds = myFilter((element, index) => {
	return element % 2 === 0;
}, [1,2,3,4,5,6,7,8,9,10]);

console.log( odds );


