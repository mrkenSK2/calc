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
ex = function(){
    let liFirst = document.createElement('h2')
liFirst.textContent = 'lo'
document.body.appendChild(liFirst);

}
ex = function(){
    /*let liFirst = document.createElement('h2')
liFirst.textContent = 'lo'
document.body.appendChild(liFirst);*/
const input1 = document.createElement("input");
const input2 = document.createElement("h1");
let inp = document.getElementById('info');
let op1 = Math.floor( Math.random() * 11 );
let op2 = Math.floor( Math.random() * 11 );
let opecode = Math.floor( Math.random() * 2 );
let opr = "";
let ans = 0;
if(opecode===0){
    opr = "+";
    ans = op1 + op2;
}else{
    opr="-";
    ans = op1 - op2;
}
let state = op1 + opr + op2 + "=" 
const text1 = document.createTextNode(state);
     // input1.setAttribute("type", "text");
      inp.appendChild(text1);
      //document.appendChild(input2);
}