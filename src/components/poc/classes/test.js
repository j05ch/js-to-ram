class Test {
	constructor(color1, color2) {
		this._color1 = color1;
		this._color2 = color2;
	}

	toggleColorOne() {
		if (this._color1 === 'blue') {
			this._color1 = 'red';
		} else {
			this._color1 = 'blue';
		}
	}

	toggleColorTwo() {
		if (this._color2 === 'blue') {
			this._color2 = 'red';
		} else {
			this._color2 = 'blue';
		}
	}

	get color1() {
		return this._color1;
	}

	get color2() {
		return this._color2;
	}
}

export default Test;
