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

function saveBids() {
    localStorage.setItem("savedbids1", array1)
    localStorage.setItem("savedbids2", array2)
}

function loadBids() {
    let reload1 = []
    reload1 = localStorage.getItem("savedbids1")
    array1 = reload1
    console.log(array1)
    console.log(reload1)
    document.getElementById("array1").innerHTML = array1.join("");
}