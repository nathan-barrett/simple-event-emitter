class EventEmitter {
	constructor() {
		this.events = {};
    }
    // The constructor will automatically create an empty events object where all events listeners will be pushed into. 
	on(e, fn) {
     // After doing some research, I felt like a Set rather than an array would work better since it wouldnt allow duplicate function within a specific event.  Basically this method is checking to see if the event already exists - and if it does it will add the function to that Set, otherwise create a new set where it contains the called function.
		if (this.events[e]) {
		return this.event[e].add(fn);
		}
		this.events[e] = new Set([fn]);
	}
	once(e, fn) {
     // Much like the .on method, except for also adding a the key "1" to provide for branching in the emit argument to see if it needs to be unsubcribed from
		if (this.events[e]) {
			this.event[e].add(fn, 1);
		}
		this.events[e] = new Set([fn, 1]);
	}
	emit(e, ...args) {
    //  the emit method allows you to actually trigger the previous event and provide any amount of arguments for the callback function. I decided to use the .apply method because we are not sure of how many different arguments that the function will have, and the type checking is used to differentiate between the .on event listeners and the .once event listeners. 
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
    // The off method has two purposes, it can either reset the entire events object is not given any arguments or it can take a specific event and remove that from the events object.
		if (arguments.length === 0) {
			this.events = {};
		}
		if (this.events[e]) {
			delete this.events[e];
		} else if (!this.events[e]) {
			console.log('Event Argument does not exist - please enter a valid event');
		}
	}
}



module.exports = EventEmitter;
