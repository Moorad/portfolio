const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const navBar = document.getElementsByClassName('nav-bar')[0];

const MIN_STAR_SIZE = 1;
const MAX_STAR_SIZE = 3;
const MAX_OFFSET = 80;
const MIN_OFFSET = 0;
const GAP = 120;
const moveMultiplier = 0.01;

let stars = [];
let mouseX = 0;
let mouseY = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		// Star minimum size: 1 maximum size: 3
		this.size = MIN_STAR_SIZE + Math.floor(Math.random() * (MAX_STAR_SIZE - MIN_STAR_SIZE));
		this.opacity = 0.7 + Math.floor(Math.random() * 0.3);
		
		// speed is correlated with size. smaller star, faster star
		this.spd = (3 - this.size) * 0.08;

		// Uniformly add stars in a grid with equal distance.
		// Here we move them around slightly in a random direction.
		// This gives us randomly positioned stars that are not too pact in one area or too few in another.
		let offsetxDirection = Math.floor(Math.random() * 3) - 1;
		let offsetyDirection = Math.floor(Math.random() * 3) - 1;
		let offsetMagnitude = MIN_OFFSET + Math.floor(Math.random() * (MAX_OFFSET - MIN_OFFSET));
		
		this.x += ((offsetxDirection) * offsetMagnitude);
		this.y += ((offsetyDirection) * offsetMagnitude);
	}

	draw() {
		this.x += this.spd;
		this.y += this.spd;
		
		// If off the screen, reset position to either top of screen or left of screen
		if (this.x > canvas.width || this.y > canvas.height) {
			let randomSide = Math.floor(Math.random() * 10);
			if (randomSide < 3) { // 30% probability of respawning on y axis
				this.x = 0;
				this.y = Math.floor(Math.random() * canvas.height);
			} else { // 70% probability of respawning on x axis (because width of screen is bigger than height)
				this.x = Math.floor(Math.random() * canvas.width);
				this.y = 0;
			}
		}

		let newX = this.x + ((-1) * (mouseX - (window.innerWidth / 2))) * moveMultiplier;
		let newY = this.y + ((-1) * (mouseY - (window.innerHeight / 2))) * moveMultiplier;

		ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
		ctx.beginPath();
		ctx.arc(newX, newY, this.size, 0, Math.PI *  2, false);
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
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	stars.forEach(s => {
		s.draw();
	});
}

window.addEventListener('scroll', (e) => {
	if (scrollY > 0) {
		navBar.classList.add('nav-bar-scroll');
	} else {
		navBar.classList.remove('nav-bar-scroll');
	}
});

window.addEventListener('mousemove', (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

load();

setInterval(() => {
	draw();
}, (1000 / 60));
