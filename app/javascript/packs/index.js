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
let correct_num = 0;
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
        ++correct_num;
        li.innerHTML += "　🙂 正解";
    } else {
        li.innerHTML += "　😑 不正解";
    }
}

function create_view_result(q_num) {
    let result = document.createElement('p');
    result.innerHTML = q_num + "問中" + correct_num + "問正解です!!";
    document.body.appendChild(result);
    prepare_result(q_num, correct_num);
}

function create_return_btn() {
    let form = document.getElementById("send");
    const input = document.createElement("input");
    input.type = "submit";
    input.value = "トップに戻る"
    form.appendChild(input);
}

// 正誤判定
function check_ans(ans) {
    if (ans === tmp_ans) {
        return true;
    } else {
        return false;
    }
}

function prepare_result(total, correct) {
    let q_num = document.getElementById("q_num");
    q_num.value = total;
    let good = document.getElementById("correct");
    good.value = correct;
}


// 開始時間
let startTime;
// 時間を表示する関数
function displayTime() {
    const time = document.getElementById('time');
    const currentTime = new Date(Date.now() - startTime);
    const h = String(currentTime.getHours() - 9).padStart(2, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');
    time.textContent = `${h}:${m}:${s}.${ms}`;
    setTimeout(displayTime, 10);
}

timer = function(){
    startTime = Date.now();
    displayTime();
}

function random_expgen() {
    let form = document.createElement("form");
    form.id = "q" + String(num); 
    form.style.display = "inline";

    let rawnum = Math.floor( Math.random() * 9000 ) + 1000;
    array = [1,2,3,4];
//    tmpnum = rawnumをスライスで桁の配列
 //   num1 num2 tmpnumを元に
let cursor=0;
    while (len(array) != 0 ) {
        idx = Math.floor( Math.random() * len(array) );
        val = array(idx);

        array.remove(idx);
tmpnum[cursor] = rawnum[val];
cursor++;

    }

}
if (true) { // 0が上位桁
// カットする
}
