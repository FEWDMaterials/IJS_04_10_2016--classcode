function getStyles( elem ) {
	return window.getComputedStyle( elem, null );
}
class _Slider {
	constructor( classRef ) {
		this.classRef = classRef;
		this.container = document.querySelector( classRef );
		this.width = this.getWidth();
		this.current = 0;

		this.start();
	}
	start() {
		this.interval = setInterval(() => this.goNext(), 2000);
	}
	stop() {
		clearInterval( this.interval );
	}
	goNext() {
		this.current++;
		this.container.style.left = -1 * this.current * this.width + 'px';

		if ( this.current === 2 ) {
			this.current = -1;
		}
	}
	getWidth() {
		const contentItem = this.container.querySelector('div');
		return parseInt( getStyles( contentItem ).width, 10 );
	}
	goToSlide(n) {
		this.stop();
		this.current = n - 1;
		this.goNext();
	}
	skipTo( n ) {
		this.goToSlide( n );
		this.start();
	}
}

export default function Slider( classRef ) {
	return new _Slider( classRef )
}

// function slider() {
// 	const container = document.querySelector('.mySlider__container');
// 	const width = 300;
// 	let current = 0;

// 	setInterval(() => {
// 		current++;
// 		container.style.left = -1 * current * width + 'px';

// 		if ( current === 2 ) {
// 			current = -1;
// 		}
// 	}, 2000);
	

// }

// slider();