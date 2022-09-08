const projects = [{
		'name': 'Portfolio',
		'description': 'This project is the website you are currently viewing!',
		'preview_img': 'images/placeholder.png',
		'buttons': [{
			'icon_class': 'fa-solid fa-link',
			'text': 'Visit',
			'link': 'https://moorad.dev/',
			'isDisabled': false
		}, {
			'icon_class': 'fa-solid fa-code',
			'text': 'Repo',
			'link': 'https://github.com/Moorad/portfolio',
			'isDisabled': false
		}],
		'technologies': [
			'HTML',
			'Sass',
			'JavaScript'
		],
		'tags': [
			'Personal',
			'Website',
			'UI'
		]
	}, {
		'name': 'Home Server',
		'description': 'This is a system that I\'ve setup to manage my files, project deployments and tools at home.',
		'preview_img': 'images/placeholder.png',
		'buttons': [{
			'icon_class': 'fa-solid fa-link',
			'text': 'Visit',
			'link': '',
			'isDisabled': true
		}, {
			'icon_class': 'fa-solid fa-code',
			'text': 'Repo',
			'link': 'https://github.com/Moorad/home-network',
			'isDisabled': false
		}],
		'technologies': [
			'Node.js',
			'JavaScript',
			'React',
			'Bootstrap'
		],
		'tags': [
			'Personal',
			'Web App'
		]
	}, {
		'name': 'Cifar10 ML',
		'description': 'This is a simple neural network for object recognition. The model gets trained with the <a href="http://www.cs.toronto.edu/~kriz/cifar.html">cifar-10 dataset</a>, this is a dataset that consists of 60,000 32x32 colour images in 10 classes.',
		'preview_img': 'images/cifar10.png',
		'buttons': [{
			'icon_class': 'icon-googlecolab',
			'text': 'Colab',
			'link': 'https://colab.research.google.com/drive/1tCls8ue2ntO0xBTrRKmWcP4Bb-bkx7Ma?usp=sharing',
			'isDisabled': false
		}, {
			'icon_class': 'fa-solid fa-code',
			'text': 'Repo',
			'link': 'https://github.com/Moorad/cifar10-ml',
			'isDisabled': false
		}],
		'technologies': [
			'HTML',
			'Python',
			'Tensorflow',
		],
		'tags': [
			'Personal',
			'Machine Learning'
		]
	}, {
		'name': 'Rats Game',
		'description': 'A clone of <a href="http://www.windowsgames.co.uk/rats.html">1996 Rats! game by Sean O’Connor</a>. This is a game of strategy, quick response and of course a little luck! This was a 8 member group university project for CS-230.',
		'preview_img': 'images/rat_game.png',
		'buttons': [{
			'icon_class': 'fa-solid fa-download',
			'text': 'Download',
			'link': '',
			'isDisabled': true
		}, {
			'icon_class': 'fa-solid fa-code',
			'text': 'Repo',
			'link': '',
			'isDisabled': true
		}],
		'technologies': [
			'Java',
		],
		'tags': [
			'University',
			'Desktop Game',
			'Group Project'
		]
	}, {
		'name': 'Tasks',
		'description': 'Cant keep track of your daily tasks? Tasks might be for you. This was one of my first web application with my frontend and a firebase backend.',
		'preview_img': 'images/tasks.png',
		'buttons': [{
			'icon_class': 'fa-solid fa-link',
			'text': 'Visit',
			'link': 'https://moorad.github.io/Tasks',
			'isDisabled': false
		}, {
			'icon_class': 'fa-solid fa-code',
			'text': 'Repo',
			'link': 'https://github.com/Moorad/Tasks',
			'isDisabled': false
		}],
		'technologies': [
			'HTML',
			'CSS',
			'JavaScript',
			'Firebase'
		],
		'tags': [
			'Personal',
			'Web App'
		]
	}
];

const TECH_ICONS = {
	'HTML': 'fa-brands fa-html5',
	'CSS': 'fa-brands fa-css3',
	'JavaScript': 'fa-brands fa-js',
	'Node.js': 'fa-brands fa-node',
	'TypeScript': 'icon-typescript',
	'React': 'fa-brands fa-react',
	'Python': 'fa-brands fa-python',
	'Java': 'fa-brands fa-java',
	'MongoDB': 'icon-mongodb',
	'Sass': 'fa-brands fa-sass',
	'Bootstrap': 'fa-brands fa-bootstrap',
	'Tensorflow': 'icon-tensorflow',
	'Firebase': 'icon-firebase'
};

let TECHNOLOGIES = {
	'HTML': [],
	'CSS': ['Sass'],
	'JavaScript': ['TypeScript', 'Node.js', 'React'],
	'Node.js': [],
	'TypeScript': [],
	'React': [],
	'Python': [],
	'Java': [],
	'MongoDB': [],
}

let filterList = document.getElementById('filter-list');
let container = document.getElementsByClassName('projects-container')[0];

function render() {
	projects.forEach((project) => {
		let item = document.createElement('div');
		item.className = 'projects-item';

		let projectImg = document.createElement('img');
		projectImg.className = 'project-img';
		projectImg.src = project.preview_img;

		let projectName = document.createElement('div');
		projectName.className = 'project-name';
		projectName.innerText = project.name;

		let projectDescription = document.createElement('div');
		projectDescription.className = 'project-description';
		projectDescription.innerHTML = project.description;

		let buttonContainer = document.createElement('div');
		buttonContainer.className = 'project-buttons';
		for (let i = 0; i < project.buttons.length; i++) {
			let hyperlink = document.createElement('a');
			hyperlink.href = project.buttons[i].link;

			let button = document.createElement('button');
			button.className = 'primary';

			if (project.buttons[i].isDisabled) {
				button.disabled = true;
			}

			let icon = document.createElement('i');
			icon.className = project.buttons[i].icon_class;

			let whitespace = document.createElement('span');
			whitespace.className = 'whitespace-xs';

			button.appendChild(icon);
			button.appendChild(whitespace);
			button.appendChild(document.createTextNode(project.buttons[i].text));

			hyperlink.appendChild(button);

			buttonContainer.appendChild(hyperlink);

		}

		let tagContainer = document.createElement('div');
		tagContainer.className = 'project-tags';
		for (let i = 0; i < project.tags.length; i++) {
			let tag = document.createElement('div');
			tag.className += 'tag';
			tag.innerHTML = project.tags[i];

			tagContainer.appendChild(tag);
		}

		let techContainer = document.createElement('div');
		techContainer.className = 'project-langs';

		for (let i = 0; i < project.technologies.length; i++) {
			let tech = document.createElement('div');
			tech.className = 'lang tooltip';

			let icon = document.createElement('i');
			icon.className = TECH_ICONS[project.technologies[i]];
			icon.className += ' fa-lg';

			let tooltipText = document.createElement('span');
			tooltipText.className += 'tooltip-text';
			tooltipText.innerText = project.technologies[i];

			tech.appendChild(icon);
			tech.appendChild(tooltipText);

			techContainer.appendChild(tech);
		}

		item.appendChild(projectImg);
		item.appendChild(projectName)
		item.appendChild(projectDescription);
		item.appendChild(buttonContainer);
		item.appendChild(techContainer);
		item.appendChild(tagContainer);
		container.appendChild(item);
	});


	// Render filter
	const htmlBtn = (content) => `<button class="lang" onclick='handleClick(this);'><i class='${TECH_ICONS[content]}'></i><span class='whitespace-xs'></span>${content}</button>`
	filterList.innerHTML += htmlBtn('All');
	filterList.children.item(0).className += ' active';
	Object.keys(TECHNOLOGIES).forEach((e, i) => {
		filterList.innerHTML += (htmlBtn(e))
	});

}

function handleClick(elem) {
	for (let i = 0; i < filterList.children.length; i++) {
		filterList.children.item(i).classList.remove('active');
	}

	elem.className += ' active';

	if (elem.innerText == 'All') {
		for (let i = 0; i < container.children.length; i++) {
			container.children.item(i).classList.remove('hidden');
		}

		return;
	}


	let filter = [elem.innerText].concat(TECHNOLOGIES[elem.innerText]);

	for (var i = 0; i < container.children.length; i++) {
		let child = container.children.item(i);
		let hasTech = filter.some((t) => projects[i].technologies.includes(t));

		if (!hasTech) {
			child.className += ' hidden';
		} else {
			child.classList.remove('hidden');
		}
	}
}

function filter() {
	console.log(container);
}

render();