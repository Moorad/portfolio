const projects = [{
		'name': 'Portfolio',
		'description': '(This site!)',
		'preview_img': 'images/cifar10.png',
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
		]
	},
	{
		'name': 'Home Server',
		'description': 'A personal home server to remotely view and manage files and projects',
		'preview_img': 'images/home_server.png',
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
			'Node',
			'JavaScript',
			'React',
			'Bootstrap'
		]
	},
	{
		'name': 'Cifar10 ML',
		'description': 'Simple cifar10 machine learning project',
		'preview_img': 'images/cifar10.png',
		'buttons': [{
			'icon_class': 'fa-solid fa-link',
			'text': 'Visit',
			'link': '',
			'isDisabled': true
		}, {
			'icon_class': 'fa-solid fa-code',
			'text': 'Repo',
			'link': 'https://github.com/Moorad/cifar10-ml',
			'isDisabled': false
		}, {
			'icon_class': 'icon-googlecolab',
			'text': 'Colab',
			'link': 'https://colab.research.google.com/drive/1tCls8ue2ntO0xBTrRKmWcP4Bb-bkx7Ma?usp=sharing',
			'isDisabled': false
		}],
		'technologies': [
			'HTML',
			'Python',
			'Tensorflow',
		]
	}
];

const TECH_ICONS = {
	'HTML': 'fa-brands fa-html5',
	'CSS': 'fa-brands fa-css3',
	'JavaScript': 'fa-brands fa-js',
	'Node': 'fa-brands fa-node',
	'TypeScript': 'icons-typscript',
	'React': 'fa-brands fa-react',
	'Python': 'fa-brands fa-python',
	'Java': 'fa-brands fa-java',
	'MongoDB': 'icon-mongodb',
	'Sass': 'fa-brands fa-sass',
	'Bootstrap': 'fa-brands fa-bootstrap',
	'Tensorflow': 'icon-tensorflow'
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

		let techContainer = document.createElement('div');
		techContainer.className = 'project-langs';

		for (let i = 0; i < project.technologies.length; i++) {
			let tech = document.createElement('div');
			tech.className = 'lang';

			let icon = document.createElement('i');
			icon.className = TECH_ICONS[project.technologies[i]];
			icon.className += ' fa-lg';

			tech.appendChild(icon);

			techContainer.appendChild(tech);
		}

		item.appendChild(projectImg);
		item.appendChild(projectName)
		item.appendChild(buttonContainer);
		item.appendChild(techContainer);
		container.appendChild(item);
	});


	// Render filter
	const htmlBtn = (content) => `<button class="lang" onclick='handleClick(this);'>${content}</button>` 
	filterList.innerHTML += htmlBtn('All');
	Object.keys(TECHNOLOGIES).forEach((e, i) => {
		filterList.innerHTML += (htmlBtn(e))
	});

}

function handleClick(elem) {
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
			child.className += ' hidden'
		} else {
			child.classList.remove('hidden');
		}
	}
	// .forEach((child) => {
	// 	console.log(child);
	// })

	// console.log(filter());
}

function filter() {
	console.log(container);
}	

render();