let array1 = [];
let array2 = [];

function addBid1() {
    let bid1 = document.getElementById("input1");
    let num1 = Number(bid1.value);
    array1.push("<li>" + num1 + "</li>");
    document.getElementById("array1").innerHTML = array1.join("");
}

function addBid2() {
    let bid2 = document.getElementById("input2");
    let num2 = Number(bid2.value);
    array2.push("<li>" + num2 + "</li>");
    document.getElementById("array2").innerHTML = array2.join("");
}