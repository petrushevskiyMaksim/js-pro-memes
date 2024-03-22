class View {
	constructor({
		onMemeChange,
		onTextTopChange,
		onTextBottomChange,
		onColorTextTopChange,
		onColorTextBottomChange,
	}) {
		this.previewTopTextNode = document.getElementById('textTop');
		this.previewBottomTextNode = document.getElementById('textBottom');
		this.previewImgNode = document.getElementById('imgPreview');

		this.settingsSelectNode = document.getElementById('memesSelect');
		this.textTopInputNode = document.getElementById('inputTopText');
		this.textBottomInputNode = document.getElementById('inputBottomText');
		this.textTopErrorNode = document.getElementById('textTopError');
		this.textBottomErrorNode = document.getElementById('textBottomError');
		this.colorTopTextNode = document.getElementById('colorTopText');
		this.colorBottomTextNode = document.getElementById('colorBottomText');

		this.onMemeChange = onMemeChange;
		this.onTextTopChange = onTextTopChange;
		this.onTextBottomChange = onTextBottomChange;
		this.onColorTextTopChange = onColorTextTopChange;
		this.onColorTextBottomChange = onColorTextBottomChange;

		this.settingsSelectNode.addEventListener(
			'change',
			this._handleSelectChange
		);
		this.textTopInputNode.addEventListener('input', this._handleTextTopChange);
		this.textBottomInputNode.addEventListener(
			'input',
			this._handleTextBottomChange
		);
		this.colorTopTextNode.addEventListener(
			'input',
			this._handleColorTextTopChange
		);
		this.colorBottomTextNode.addEventListener(
			'input',
			this._handleColorTextBottomChange
		);
	}

	getTextTopInput() {
		return this.textTopInputNode;
	}

	getTextBottomInput() {
		return this.textBottomInputNode;
	}

	getTextTopError() {
		return this.textTopErrorNode;
	}
	getTextBottomError() {
		return this.textBottomErrorNode;
	}

	renderPreview(preview) {
		const { url, textTop, textBottom, colorTextTop, colorTextBottom } = preview;

		this.previewTopTextNode.innerText = textTop;
		this.previewBottomTextNode.innerText = textBottom;
		this.previewImgNode.src = url;
		this.previewTopTextNode.style.color = colorTextTop;
		this.previewBottomTextNode.style.color = colorTextBottom;
	}

	renderMemesSelect(memes, currentMemeId) {
		memes.forEach(meme => {
			const { id, name } = meme;

			const optionNode = document.createElement('option');
			optionNode.setAttribute('value', id);
			optionNode.classList.add('memes-list__option');
			optionNode.innerText = name;

			if (id === currentMemeId) {
				optionNode.setAttribute('selected', true);
			}

			this.settingsSelectNode.appendChild(optionNode);
		});
	}

	_handleSelectChange = () => {
		const id = this.settingsSelectNode.value;

		this.onMemeChange(id);
	};

	_handleTextTopChange = event => {
		this.onTextTopChange(event.target.value);
	};

	_handleTextBottomChange = event => {
		this.onTextBottomChange(event.target.value);
	};

	_handleColorTextTopChange = event => {
		this.onColorTextTopChange(event.target.value);
	};

	_handleColorTextBottomChange = event => {
		this.onColorTextBottomChange(event.target.value);
	};
}
