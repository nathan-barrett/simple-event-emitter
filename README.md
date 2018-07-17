# Event Emitter for JavaScript (Urban Airship Challenge)
Nathan Barrett

:email: demeules.barrett@gmail.com

:octocat: github.com/nathan-barrett 

## Description:

Event Emitters are objects that serve at the core building block in event-driven arcitecture. The goal of event emmiters is to declutter and clean code, especially asyncronous code. This code is written in ES6. This Event Emitter Module conatins the most basic uses for an event Emitter: subscription to an event, unsubscribing from either a single event or all events, emitting the subscribed events and only running an event once and then automatically unsubcribing from that specific event.

## Installation
```
git clone https://github.com/nathan-barrett/simple-event-emitter

cd simple-event-emitter && npm i
```

## Dependencies

There are no dependencies, you just need to clone and run `npm i` to install the development dependencies.

## How to use Event Emitter

Once you require Event Emitter from index.js you just need to create an instance of the class:
``` js
const ee = new EventEmitter();
```
There are several different methods that come with the Event Emitter class: .on, .emit, .once, and  .off

## .on
```js
ee.on('click', (input) => {
    console.log(input)` <br>
})
```
In the code above 'click' is the event and the call back function will run when 'click' is emitted. 

the .on method can take any number of arguments for the call back function as shown below:

```js
ee.on('sum', (a, b, c, d, e, f) => {
    return a + b + c + d + e + f;
})
```
## .emit
Whenever you want to actual trigger your function, you call the emit method calling whatver event you subcribed to previously:
```js
ee.emit('click', 'hello');
ee.emit('sum', 1, 2, 3, 4, 5, 6);
```
expected return: 
```js
console.log('hello');
21
```
## .off
You can also either remove a single listener from your emitter object by passing the event as an argument:
```js
ee.off('click');
```
which would remove the click index from the object or you can call .off without any arguments to remove all events from the emitter object:
```js
ee.off();
```
## .once
You can also use the .once method to create a one-time event listener, and once triggered using .emit the event listener will remove itself automatically:
```js
ee.once('open', () => {
    console.log('This will only fire once')
});
```
Now created, you can call the emit method:
```js
ee.emit('open');
```
Which will call the console.log, but if you tried to emit again, it would not work.

## Testing
All testing was done with Jest and Jest's expect library

## Notes
This was a really fun exercise - I hadn't attempted to make a NPM module before, and it was exciting was to learn more about how JavaScript uses events as a cornerstone of its programming philosophy. 

Here are a few links that helped me understand a little more:

1. [Eloquent JavaScript](https://eloquentjavascript.net/15_event.html)
2. [Mozilla Developer Network on Events as a building block](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

Moving forward, I would like to incorporate type checking and error handling -- without it the testing was a bit complex.