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

expgen = function(num) {
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
    li.style.display = "inline";
    li.innerHTML = statement;
    exp_part.appendChild(li);
    form.appendChild(input);
    exp_part.appendChild(form);
    let br = document.createElement( "br" );
    exp_part.appendChild(br);
    /* */
    tmp_ans = ans;

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        set_submit(num);
    });
}

function set_submit(num) {
    // if 最後の問題
    // 答え合わせボタン生成
    // else
    // 次の問題を作るのと正解かの表示
    let next_num = num + 1
    //let form = document.getElementById("q" + num);
    let new_form = document.createElement("form");
    new_form.id = "q" + String(next_num); 
    new_form.style.display = "inline";

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
    input.id= "ans" + String(num ) + 1;

    let exp_part = document.getElementById('exp');
    let statement ="(" + next_num + ") "+ op1 + opecode + op2 + "=" 
    let li = document.createElement('li');
    li.style.display = "inline";
    li.innerHTML = statement;
    exp_part.appendChild(li);
    new_form.appendChild(input);
    exp_part.appendChild(new_form);
    let br = document.createElement( "br" );
    exp_part.appendChild(br);
    /* */
    tmp_ans = ans;

    new_form.addEventListener("submit", (e)=>{
        e.preventDefault();
        set_submit(next_num);
    });
}

tmpt = function(){
    let fg = document.forms.g1;
    let element = document.getElementById('hhh');
console.log(element.value);
    let preform = document.getElementById('g1');
    let parent = document.getElementById('exp');
    // parent.removeChild(preform);



    problem_num++;
    let form = document.createElement("form");
    form.id = "g" + String(problem_num); 
    form.style.display = "inline";
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
    });

    const input = document.createElement("input");
    input.type = "number";
    
    let exp_part = document.getElementById('exp');
    let op1 = Math.floor( Math.random() * 11 );
    let op2 = Math.floor( Math.random() * 11 );
    let opecode_num = Math.floor( Math.random() * 2 );
    let opecode = "";
    let ans = 0;
    if(opecode_num === 0) {
        opecode = "+";
        ans = op1 + op2;
    }else{
        opecode = "-";
        ans = op1 - op2;
    }
    let state ="(" + problem_num +") "+ op1 + opecode + op2 + "=" 
    let li = document.createElement('li');
    li.style.display = "inline";
    li.innerHTML = state;
    exp_part.appendChild(li);
    form.appendChild(input);
    //exp_part.appendChild(input);
    exp_part.appendChild(form);
    let br = document.createElement( "br" );
    exp_part.appendChild(br);
}

expgenpre = function(){
    problem_num++;
    let form = document.createElement("form");
    form.id = "g" + String(problem_num); 
    form.style.display = "inline";


    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        tmpt();
        /*const input = document.createElement("input");
    input.type = "number";
    let exp_part = document.getElementById('exp');
    let op1 = Math.floor( Math.random() * 11 );
    let op2 = Math.floor( Math.random() * 11 );
    let opecode_num = Math.floor( Math.random() * 2 );
    let opecode = "";
    let ans = 0;
    if(opecode_num === 0) {
        opecode = "+";
        ans = op1 + op2;
    }else{
        opecode = "-";
        ans = op1 - op2;
    }
    let state ="(" + problem_num +") "+ op1 + opecode + op2 + "=" 
    let li = document.createElement('li');
    li.style.display = "inline";
    li.innerHTML = state;
    exp_part.appendChild(li);
    form.appendChild(input);
    //exp_part.appendChild(input);
    exp_part.appendChild(form);
    let br = document.createElement( "br" );
    exp_part.appendChild(br);*/
   });

    if(problem_num===1){const input = document.createElement("input");
    input.type = "number";
    input.id='hhh';
    let exp_part = document.getElementById('exp');
    let op1 = Math.floor( Math.random() * 11 );
    let op2 = Math.floor( Math.random() * 11 );
    let opecode_num = Math.floor( Math.random() * 2 );
    let opecode = "";
    let ans = 0;
    /* */
    tmp_ans = ans;

    if(opecode_num === 0) {
        opecode = "+";
        ans = op1 + op2;
    }else{
        opecode = "-";
        ans = op1 - op2;
    }
    let statement ="(" + num +") "+ op1 + opecode + op2 + "=" 
    let li = document.createElement('li');
    li.style.display = "inline";
    li.innerHTML = statement;
    exp_part.appendChild(li);
    form.appendChild(input);
    //exp_part.appendChild(input);
    exp_part.appendChild(form);
    let br = document.createElement( "br" );
    exp_part.appendChild(br);}
}

// 次の式を出す
function exp_ge() {
}
// 答えを送信して成語判定
function submit_ans() {
}
