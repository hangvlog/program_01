window.onload = function() {
    // 绑定事件
    var num = document.querySelectorAll('.number')
        // console.log(num);
        // console.log(num[0].innerHTML);

    // 结果展示区域
    var operator = document.querySelectorAll('.operator');
    console.log(operator);
    var second = document.querySelector('#second');
    var pre = document.querySelector('#pre');


    var ls_num_now = [];
    var ls_operator_now = [];
    // var num_pre = NULL;
    // 添加事件监听
    for (var i = 0; i < num.length; i++) {
        num[i].addEventListener('click', function() {
            // console.log(this.innerHTML);
            ls_num_now.push(this.innerHTML);
            // console.log(ls_num_now);
            var num_temp = ls_num_now.join('');
            // console.log(num_temp);
            second.innerHTML = num_temp;
        })
    }
    for (var i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', function() {
            ls_operator_now[0] = this.innerHTML;
            console.log(ls_operator_now);
            // var str_pre = num_temp + operator[i];
            // pre.innerHTML = str_pre;
        })
    }
}


// var Calculator = {



//     // 初始化
//     // initCache: function() {

//     // }
// }