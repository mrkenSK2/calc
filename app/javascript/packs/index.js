buttonClick = function(){
    alert("mes");
}
/*function inputChange(){
    let element = document.getElementById('q_num');
    if(!isNaN(element.value)) {
        alert("miss");

    }
}*/
checkPositive = function() {
    let q_num = parseInt(document.qinfo.q_num.value);
    if (q_num <= 0) {
        alert("正の整数を入力してください");
        return false;
    } 
    return true;
}