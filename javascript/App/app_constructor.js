const TaqKarim = {
	fullName: "Mottaqui Karim",
	weight: 181,
	height: 72,
	eyeColor: 'black',
	hasGlasses: true,
	catchPhrase() {
		console.log('vim is life, yo');
	}
};

console.log( TaqKarim.fullNam1e );

const ChrisLimbrick = {
	fullName: 'Chris Limbrick',
	weight: 145,
	catchPhrase() {
		console.log('I\'ll tell you what...');
	} 
}; 

class Person {
	constructor( fullName, weight, catchPhrase ) {
		this.fullName = fullName;
		this.weight = weight;
		this.phrase = catchPhrase;
	}
	catchPhrase() {
		console.log( this.phrase );
	}
}

const tk = new Person('Mottaqui Karim', 181, 'vim is life, yo');
tk.foobar();

const cl = new Person('Chris Limbrick', 145, 'I\'ll tell you what');
console.log( tk.catchPhrase() );
console.log( TaqKarim, ChrisLimbrick, tk, cl, Person.prototype );
