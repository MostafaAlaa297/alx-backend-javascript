class Airport {
	constructor(name, code) {
		this.name = name;
		this.code = code;
	}

	get name() {
		return this._name
	}

	set name(value) {

		this._name = value;
	}

	get code() {
		return this.code;
	}

	set code(value) {
	}

	get [Symbol.toStringTag] () {
		return this._code;
	}
}
