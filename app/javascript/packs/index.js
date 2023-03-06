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

let an = 0;
expgen = function(){
    an++;
    const input = document.createElement("input");
    input.type = "number";
    let inp = document.getElementById('exp');
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
    let state ="(" + an +") "+ op1 + opecode + op2 + "=" 
    let li = document.createElement('li');
    li.style.display = "inline";
    li.innerHTML = state;
    inp.appendChild(li);
    inp.appendChild(input);
    let br = document.createElement( "br" );
    inp.appendChild(br);
}