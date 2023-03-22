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

random_expgen = function(num, max, digit) {
    let form = document.createElement("form");
    form.id = "q" + String(num); 
    form.style.display = "inline";

    let idx_lst = [];

    let raw_num = Math.floor( Math.random() * (90 * (100 ** (digit - 1)))) + 10 * (100 ** (digit - 1));
    let opecode_num = Math.floor( Math.random() * 2 );
    let opecode = "";
    let ans = 0;
    if(opecode_num === 0) {
        opecode = "+";
    } else {
        opecode = "-";
    }
    const input = document.createElement("input");
    input.type = "number";
    input.id= "ans" + String(num);


    for (let i = 0; i < 2 * digit; i++) {
        idx_lst[i] = i;    
    }

    let num_array_org = Array.from(String(raw_num), Number);
    let tmp_array = [];
    let cursor=0;

    let appear_order = [];
    let op1 = 0, op2 = 0;
 
    while (idx_lst.length != 0 ) {
        let idx = Math.floor( Math.random() * idx_lst.length );

        appear_order.push(idx_lst[idx]);

        val = idx_lst[idx];
        idx_lst = idx_lst.filter(n => n !== val);
        tmp_array[cursor] = num_array_org[val];
        cursor++;
    }

    // 半分に分けて数字化
    for (let i = 0; i < digit; i++) {
        op1 += tmp_array[i] *  (10 ** (digit - i - 1));
        op2 += tmp_array[i + digit] *  (10 ** (digit - i - 1));
    }
    if(opecode_num === 0) {
        ans = op1 + op2;
    } else {
        ans = op1 - op2;
    }
    let exp_part = document.getElementById('exp');

    let q_no ="(" + num + ") ";
    let raw_exp = "";
    for (let i = 0; i< 4 * digit + 1; i++) {
        raw_exp += " "
    }
    console.log(typeof(raw_exp));
    let begin = 2*digit+1;
    let replace_str = opecode;
    let before = raw_exp.slice(0, begin - 1);
    let after = raw_exp.slice(begin);
    let ret = before + replace_str + after;
    raw_exp = ret;
    let li = document.createElement('li');
    li.id = "li" + String(num);
    li.style.display = "inline";
    li.innerHTML = q_no + raw_exp;
    exp_part.appendChild(li);

    let counter = 0;
    let print_grad = setInterval(function() {
        console.log(appear_order);
        counter++;
        if (counter > digit * 2-1) {
            clearInterval(print_grad);
            let lid = document.getElementById('li' + String(num));
            console.log(lid.innerHTML);
            lid.innerHTML = op1 + opecode + op2 + "=";
            console.log(lid.innerHTML);
            form.appendChild(input);
            exp_part.appendChild(form);
            let br = document.createElement( "br" );
            exp_part.appendChild(br);
            input.focus();
        }
        let liid = document.getElementById('li' + String(num));
        let idx = appear_order.shift();
        if (idx < digit) {
            let start = 2* idx + 1;
            let replace_str = num_array_org[idx];
            let before = raw_exp.slice(0, start - 1);
            let after = raw_exp.slice(start);
            raw_exp = before + replace_str + after;

        } else {
            let start = 2* idx + 3;
            let replace_str = num_array_org[idx];
            let before = raw_exp.slice(0, start - 1);
            let after = raw_exp.slice(start);
            raw_exp = before + replace_str + after;
        }
        liid.innerHTML = q_no + raw_exp;
        if(counter == 2*digit) {
            let lid = document.getElementById('li' + String(num));
            console.log(lid.innerHTML);
            lid.innerHTML += "　　　" + op1 + opecode + op2 + "=";
        }
    }, 400)

    form.addEventListener("submit", (e)=>{
        tmp_ans = ans;
        e.preventDefault();
        output_ans(form);
        if (num === max) {
            create_view_result(max);
            create_return_btn();
        } else {
            random_expgen(num + 1, max, digit);
        }
    });
}
