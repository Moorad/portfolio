let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let navBar = document.getElementsByClassName('nav-bar')[0];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const MIN_STAR_SIZE = 1
const MAX_STAR_SIZE = 3
const MAX_OFFSET = 80
const MIN_OFFSET = 0
const GAP = 160

let stars = [];

class Star {
	constructor(x, y) {
		// Param: initial x and y 
		this.x = x;
		this.y = y;
		this.size = MIN_STAR_SIZE + Math.floor(Math.random() * (MAX_STAR_SIZE - MIN_STAR_SIZE));
		this.opacity = 0.7 + Math.floor(Math.random() * 0.3);

		let offsetxDirection = Math.floor(Math.random() * 3) - 1;
		let offsetyDirection = Math.floor(Math.random() * 3) - 1;
		let offsetMagnitude = MIN_OFFSET + Math.floor(Math.random() * (MAX_OFFSET - MIN_OFFSET))
		
		this.x += ((offsetxDirection) * offsetMagnitude);
		this.y += ((offsetyDirection) * offsetMagnitude);

	}

	draw() {
		ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI *  2, false);
		ctx.fill();
	}
}

function load() {
	for (let i = 0; i < (canvas.height / GAP); i++) {
		for (let j = 0; j < (canvas.width / GAP); j++) {
			stars.push(new Star(GAP * j, GAP * i));
		}
	}	
}

function draw() {
	stars.forEach(s => {
		s.draw();
	});
}


function drawStar(x, y) {
	let size = MIN_STAR_SIZE + Math.floor(Math.random() * (MAX_STAR_SIZE - MIN_STAR_SIZE))
	let offsetxDirection = Math.floor(Math.random() * 3) - 1;
	let offsetyDirection = Math.floor(Math.random() * 3) - 1;
	let offsetMagnitude = MIN_OFFSET + Math.floor(Math.random() * (MAX_OFFSET - MIN_OFFSET))
	
		x += ((offsetxDirection) * offsetMagnitude);
		y += ((offsetyDirection) * offsetMagnitude);


	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI *  2, false);
	ctx.fill();

	console.log('size: ' + size);
	console.log('offset dir and mag: ' + offsetxDirection + ', ' + offsetyDirection + ', ' + offsetMagnitude);
}

window.addEventListener('scroll', (e) => {
	if (scrollY > 0) {
		navBar.className = 'nav-bar nav-bar-scroll';
	} else {
		navBar.className = 'nav-bar';
	}
})

load();
draw();
