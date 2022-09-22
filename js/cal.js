var second = document.querySelector('#second');
var numbers = document.querySelectorAll('.number');
var operators = document.querySelectorAll('.operator');
var equals = document.querySelector('#equal');
var clear = document.querySelector('#clear');
var opposite = document.querySelector('#opposite');
var pre = document.querySelector('#pre');
var back = document.querySelector('#back');
var result = '';
var pre_cache = '';
var isPositive = true;
// console.log(operators);
const ARR_OPERATORS = ['+', '-', '*', '%', '/'];


let empty = function() {
    if (eval(second.innerHTML) > 0) {
        result = '-' + second.innerHTML;
        second.innerHTML = result;
    } else {
        result = result.substring(1, result.length)
        second.innerHTML = result;
    }
}
let rollback = function() {
    result = result.substring(0, result.length - 1)
    second.innerHTML = result;
}


clear.addEventListener('click', function() {
    second.innerHTML = '0';
    result = '';
})


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        if (this.innerHTML == '0') {
            if (eval(result) == 0) {
                console.log('yes');
                return;
            }
        } else {
            result += this.innerHTML;
            second.innerHTML = result;
            console.log(second.innerHTML);
        }
    })
}
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        // pre.innerHTML = eval(result) + this.getAttribute('data-name');
        if (!ARR_OPERATORS.includes(result[result.length - 1])) {
            result += this.getAttribute('data-name');

            console.log(second.innerHTML);
        } else {
            // result[result.length - 1] = this.getAttribute('data-name');
            result = result.substring(0, result.length - 1) + this.getAttribute('data-name');
        }
        second.innerHTML = result;
    })
}

opposite.addEventListener('click', empty);
equals.addEventListener('click', function() {
    if (eval(result) == Infinity) {
        second.innerHTML = '除数不能为0';
    } else {
        second.innerHTML = eval(result);
        pre.innerHTML = eval(result);
        pre_cache = eval(result); //关于缓存如何使用
        result = eval(result);
    }

});
back.addEventListener('click', rollback)
    //dasdadjw