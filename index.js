class EventEmitter {
	constructor() {
		this.events = {};
	}
	on(e, fn) {
		if (this.events[e]) {
		return this.event[e].add(fn);
		}
		return this.events[e] = new Set([fn]);
	}
	once(e, fn) {
		if (this.events[e]) {
			this.event[e].add(fn, 1);
		}
		this.events[e] = new Set([fn, 1]);
	}
	emit(e, ...args) {
		if (this.events[e]) {
			this.events[e].forEach(fn => {
				if (typeof fn === 'function')
					fn.apply(null, args);
			});

			if (this.events[e].has(1)) {
				delete this.events[e];
			}
		} else if (!this.events[e]) {
			console.log('Event Argument does not exist - please enter a valid event');
		}
	}
	off(e) {
		if (arguments.length === 0) {
			this.events = {};
		}
		if (this.events[e]) {
			delete this.events[e];
		} else if (!this.events[e]) {
			return console.log('Event Argument does not exist - please enter a valid event');
		}
	}
}



module.exports = EventEmitter;
// module.exports.EventEmitter = EventEmitter;