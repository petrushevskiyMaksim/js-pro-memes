class Controller {
	constructor() {
		this.model = new Model({
			onMemesChange: this.handleModelMemesChange,
			onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
			onTextTopChange: this.handleModelTextTopChange,
			onTextBottomChange: this.handleModelTextBottomChange,
			onColorTextTopChange: this.handleModelColorTextTopChange,
			onColorTextBottomChange: this.handleModelColorTextBottomChange,
		});

		this.view = new View({
			onMemeChange: this.handleViewMemeChange,
			onTextTopChange: this.handleViewTextTopChange,
			onTextBottomChange: this.handleViewTextBottomChange,
			onColorTextTopChange: this.handleViewColorTextTopChange,
			onColorTextBottomChange: this.handleViewColorTextBottomChange,
		});

		this.api = new API();
	}

	init() {
		this.api.getMemes().then(data => {
			const memes = data.data.memes;

			if (memes.length > 50) {
				memes.length = 50;
			}

			this.model.setMemes(memes);
		});
	}

	handleModelMemesChange = () => {
		this.view.renderMemesSelect(
			this.model.getMemes(),
			this.model.getCurrentMemeId()
		);
	};

	handleViewMemeChange = id => {
		this.model.setCurrentMemeId(id);
	};

	handleModelCurrentMemeIdChange = () => {
		this.view.renderPreview(this.model.getPreview());
	};

	handleViewTextTopChange = text => {
		const inputTextTop = this.view.getTextTopInput();
		const errorTextTop = this.view.getTextTopError();
		const validText = text.trim();

		if (validText.length >= 10) {
			errorTextTop.innerText = 'Хорош стучать по клаве';
			inputTextTop.setAttribute('maxlength', 10);
		} else {
			errorTextTop.innerText = '';
			inputTextTop.removeAttribute('maxlength', 140);
		}

		this.model.setTextTop(text);
	};

	handleViewTextBottomChange = text => {
		const inputTextBottom = this.view.getTextBottomInput();
		const errorTextBottom = this.view.getTextBottomError();
		const validText = text.trim();

		if (validText.length >= 10) {
			errorTextBottom.innerText = 'Хорош стучать по клаве';
			inputTextBottom.setAttribute('maxlength', 10);
		} else {
			errorTextBottom.innerText = '';
			inputTextBottom.removeAttribute('maxlength', 140);
		}

		this.model.setTextBottom(text);
	};

	handleModelTextTopChange = () => {
		this.view.renderPreview(this.model.getPreview());
	};

	handleModelTextBottomChange = () => {
		this.view.renderPreview(this.model.getPreview());
	};

	handleViewColorTextTopChange = color => {
		this.model.setColorTextTop(color);
	};

	handleViewColorTextBottomChange = color => {
		this.model.setColorTextBottom(color);
	};

	handleModelColorTextTopChange = () => {
		this.view.renderPreview(this.model.getPreview());
	};

	handleModelColorTextBottomChange = () => {
		this.view.renderPreview(this.model.getPreview());
	};
}
