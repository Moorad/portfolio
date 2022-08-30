let typingText = document.getElementById('typing-text');

const TYPING_SPEED = 100;
const ERASING_SPEED = 70;
const PAUSE = 4000;

// Returns promise, promise resolved when text is finished
function typeText(text) {

	return new Promise((resolve, reject) => {
		
		let cursor = '<div class="cursor">|</div>';

		let currIndex = 0;
		let typingInterval = setInterval(() => {
			typingText.innerHTML = text.slice(0, currIndex) + cursor;
			currIndex ++;

			if (currIndex > text.length) {
				
				clearInterval(typingInterval);
				setTimeout(() => {
					let eraseInterval = setInterval(() => {
						typingText.innerHTML = text.slice(0, currIndex) + cursor;
						currIndex --;
						
						if (currIndex < 0) {
							clearInterval(eraseInterval);
							resolve();
						}
					}, ERASING_SPEED);
				}, PAUSE)
			}
		}, TYPING_SPEED);
	});
}

async function loadTypeText() {
	let sentences = ['Hello there!', 'I\'m Moorad', 'A passionate web developer', 'From Saudi Arabia'];
	let currSentence = 0;
	while (true) {
		await typeText(sentences[currSentence % sentences.length])
		currSentence ++;
	}
}

loadTypeText();