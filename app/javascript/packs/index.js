buttonClick = function(){
    alert("mes");
}

checkQnum = function() {
    let q_num = parseInt(document.qinfo.q_num.value);
    if (isNaN(q_num)) {
        alert("問題数を入力してください");
        return false;
    }
    if (q_num <= 0) {
        alert("正の整数を入力してください");
        return false;
    } 
    return true;
}

update = function() {
    let q_num = parseInt(document.qinfo.q_num.value);
    // rand3つとってきてDOMに追加
    if (isNaN(q_num)) {
        alert("問題数を入力してください");
        return false;
    }
    if (q_num <= 0) {
        alert("正の整数を入力してください");
        return false;
    } 
    return true;
}

let problem_num = 0;
let collect_num = 0;
let tmp_ans = 0;

expgen = function(num, max) {
    let form = document.createElement("form");
    form.id = "q" + String(num); 
    form.style.display = "inline";

    let op1 = Math.floor( Math.random() * 999 ) + 1;
    let op2 = Math.floor( Math.random() * 999 ) + 1;
    let opecode_num = Math.floor( Math.random() * 2 );
    let opecode = "";
    let ans = 0;
    if(opecode_num === 0) {
        opecode = "+";
        ans = op1 + op2;
    } else {
        opecode = "-";
        ans = op1 - op2;
    }
    const input = document.createElement("input");
    input.type = "number";
    input.id= "ans" + String(num);

    let exp_part = document.getElementById('exp');
    let statement ="(" + num + ") "+ op1 + opecode + op2 + "=" 
    let li = document.createElement('li');
    li.id = "li" + String(num);
    li.style.display = "inline";
    li.innerHTML = statement;
    exp_part.appendChild(li);
    form.appendChild(input);
    exp_part.appendChild(form);
    let br = document.createElement( "br" );
    exp_part.appendChild(br);
    input.focus();

    form.addEventListener("submit", (e)=>{
        tmp_ans = ans;
        e.preventDefault();
        output_ans(form);
        if (num === max) {
            create_view_result(max);
            create_return_btn();
        } else {
            expgen(num + 1, max);
        }
    });
}

output_ans = function(form) {
    const regex = /[^0-9]/g;
    let num = parseInt(form.getAttribute('id').replace(regex, ""));
    let input = document.getElementById("ans" + num);
    let input_ans = input.value;
    form.removeChild(input);

    let li = document.getElementById('li' + num);
    li.innerHTML += input_ans;
    if (check_ans(parseInt(input_ans))) {
        ++collect_num;
        li.innerHTML += "　🙂 正解";
    } else {
        li.innerHTML += "　😑 不正解";
    }
}

function create_view_result(q_num) {
    let result = document.createElement('p');
    result.innerHTML = q_num + "問中" + collect_num + "問正解です!!";
    document.body.appendChild(result);
}
function create_return_btn() {
    let result = document.createElement('a');
    result.innerHTML = "トップに戻る";
    result.setAttribute('href', "/calc");
        document.body.appendChild(result);
}
// 正誤判定
function check_ans(ans) {
    if (ans === tmp_ans) {
        return true;
    } else {
        return false;
    }
}