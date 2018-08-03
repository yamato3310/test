console.log("hell world");

var hoge = "こんにちは";
var fuga = "こんばんは";

var piyo = hoge + fuga;

console.log(piyo);

var welcomMsg=document.getElementById("welcomMsg");
var welcomBtn=document.getElementById("welcomBtn");

// function == 関数 == 一連の処理をまとめたもの
welcomBtn.onclick = function () {
    welcomMsg.textContent="蒙古タンメン";
    welcomMsg.style.color = "blue";
}