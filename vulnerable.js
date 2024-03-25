function divideByZero(a, b) {
    return a / b;
}

function getUserData() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    return {
        username: username,
        password: password
    };
}

function logUserData() {
    const userData = getUserData();
    console.log('User data:', userData);
}

function executeCode(code) {
    eval(code);
    const numbers = [10, 2, 30, 1, 5];
    numbers.sort(); // Noncompliant: lexicographic sort
    console.log(numbers); // Output: [1, 10, 2, 30, 5]
}
let foo = new Symbol('abc'); // Noncompliant: TypeError: Symbol is not a constructor
let bar = new BigInt(123);   // Noncompliant: TypeError: BigInt is not a constructor
const userInput = prompt('Enter some code:');
executeCode(userInput);