// array
weekdays = ['mon','tue','wed','thu']

// display an array
console.log(weekdays);

// total no of items in an array
console.log(weekdays.length);

// print wednesday from given array
console.log(weekdays[2]);

// print thursday from given array
console.log(weekdays[3]);

// add friday to given array
// push
weekdays.push('fri')
console.log(weekdays);

// add 3 to the given array
weekdays.push(3)
console.log(weekdays);

// remove 3 from given array
weekdays.pop()
console.log(weekdays);

// add sunday to given array
weekdays.unshift('sun')
console.log(weekdays);

// add saturday to array
weekdays.unshift('sat')
console.log(weekdays);

// remove saturday from the stat
weekdays.shift()
console.log(weekdays);