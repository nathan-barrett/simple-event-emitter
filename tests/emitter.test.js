
const EventEmitter = require('../index.js');

// Creating new Event Emitter
const ee = new EventEmitter();


test("should be able to register handler functions for named events", () => {
    ee.on('test', (x) => {
        return console.log("Test test test", x)
    })
     expect(Object.keys(ee.events)).toContain('test')
})

test('should Emit named events with a single argument', () => {
  ee.on("one", (a) => {
  	return console.log(a);
  })
  expect(ee.emit('one', 5)).toBe(console.log(5));
})

test('should Emit named events with any number of arguments', () => {
    ee.on('multiple', (x, y, z) =>{
        return console.log(`First: ${x}, Second: ${y}, Third: ${z}`)
    });
    expect(ee.emit('multiple', "Hello", "It's", "Nathan")).toBe(console.log(`First: Hello, Second: It's, Third: Nathan`))
})

test('should be able to register a "one-time" handler that will be called at most one time.', () => {
    ee.once('once', () => {
        console.log("Test")
    })
    expect(Object.keys(ee.events)).toContain('once')
    ee.emit('once')
    expect(Object.keys(ee.events)).not.toContain('once')
})

test('should be able to remove a specific previously registered event handler', () => {
    expect(Object.keys(ee.events)).toContain('one')
    ee.off('one');
    expect(Object.keys(ee.events)).not.toContain('one')
})

test("should be able to remove all previously registered event handlers", () => {
    ee.off();
    const result = {}
    expect(ee.events).toEqual(result)
})