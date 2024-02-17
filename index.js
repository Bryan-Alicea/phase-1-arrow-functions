// fuction expression

const postIt = function (message) {
    console.log(message)
}

// Arrow fuction

const add = (parameter1, parameter2) => parameter1 + parameter2;

add(3, 3)

//if only one parameter the () becomes optional
// example below

const twoAdder = x => x + 2;
// the letter x is the parameter

twoAdder(3)

const sum = (parameter1 , parameter2) => {
    console.log(`hello`);
    console.log(`potato`);
    return parameter1 + parameter2;
}

sum(2, 2)

// the .map() method is only called on Arrays and takes a function as an argument

const nums = [1,2,3]
const squares = nums.map(x => x ** 2);

console.log(squares)
console.log(nums)

const divide = function (number) {
    return number / 100
}

const square = parameter => parameter * parameter