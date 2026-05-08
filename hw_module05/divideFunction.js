const util = require('util');

function divideNumbers(a, b, callback) {

    setTimeout(() => {

        if (b === 0) {
            return callback(new Error("Cannot divide by zero"));
        }

        let result = a / b;

        callback(null, result);

    }, 1000);

}

const divide = util.promisify(divideNumbers);

await divide(10, 2)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    });