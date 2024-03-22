class Model {
	constructor({
		onCurrentMemeIdChange,
		onMemesChange,
		onTextTopChange,
		onTextBottomChange,
		onColorTextTopChange,
		onColorTextBottomChange,
	}) {
		this.memes = [];
		this.currentMemeId = null;
		this.textTop = 'Введите ваш текст сверху';
		this.textBottom = 'Введите ваш текст снизу';
		this.colorTextTop = null;
		this.colorTextBottom = null;

		this.onCurrentMemeIdChange = onCurrentMemeIdChange;
		this.onMemesChange = onMemesChange;
		this.onTextTopChange = onTextTopChange;
		this.onTextBottomChange = onTextBottomChange;
		this.onColorTextTopChange = onColorTextTopChange;
		this.onColorTextBottomChange = onColorTextBottomChange;
	}

	getMemes() {
		return this.memes;
	}

	setMemes(memes) {
		this.memes = memes;
		this.currentMemeId = memes[0].id;

		this.onMemesChange();
		this.onCurrentMemeIdChange();
	}

	setCurrentMemeId(currentMemeId) {
		this.currentMemeId = currentMemeId;

		this.onCurrentMemeIdChange();
	}

	getCurrentMemeId() {
		return this.currentMemeId;
	}

	setTextTop(text) {
		this.textTop = text;

		this.onTextTopChange();
	}

	setTextBottom(text) {
		this.textBottom = text;

		this.onTextBottomChange();
	}

	getPreview() {
		return {
			textTop: this.textTop,
			textBottom: this.textBottom,
			url: this.getCurrentMeme().url,
			colorTextTop: this.colorTextTop,
			colorTextBottom: this.colorTextBottom,
		};
	}

	getCurrentMeme() {
		let currentMeme = null;

		this.memes.forEach(meme => {
			if (meme.id === this.getCurrentMemeId()) {
				currentMeme = meme;
			}
		});
		return currentMeme;
	}

	setColorTextTop(color) {
		this.colorTextTop = color;

		this.onColorTextTopChange();
	}

	setColorTextBottom(color) {
		this.colorTextBottom = color;

		this.onColorTextBottomChange();
	}
}
