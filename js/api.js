const MEMES_MOCK = [
	{
		id: '87743020',
		name: 'Two Buttons',
		url: 'https://i.imgflip.com/1g8my4.jpg',
		width: 600,
		height: 908,
	},
	{
		id: '112126428',
		name: 'Distracted Boyfriend',
		url: 'https://i.imgflip.com/1ur9b0.jpg',
		width: 1200,
		height: 800,
	},
];

class API {
	constructor() {
		this.baseUrl = 'https://api.imgflip.com';
	}

	getMemes() {
		return fetch(`${this.baseUrl}/get_memes`)
			.then(data => data.json())
	}
}
