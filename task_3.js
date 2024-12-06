let arg_1 = 'argu';
let arg_2 = 'ment';

function getSum(elem_1) {
    return function(elem_2) {
        console.log(elem_1 + elem_2);
    }
}

let result = getSum(arg_1);

result(arg_2);