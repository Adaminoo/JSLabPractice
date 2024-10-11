let bidArray = [4, 6, 7, 19];

function showBids() {
    // Create a function that will add the array of bids to the element
    console.log(bidArray);
    let outputString = "";
    for (let i = 0; i < bidArray.length; i++) {
        outputString += `<p>${bidArray[i]}</p>`;
    }
    document.getElementById("bidOutput").innerHTML = outputString;
}

function deleteBids() {
    bidArray = [];
    document.getElementById("bidOutput").innerHTML = "";
}

function addBid(inputID) {
    // Create a function that will take the text in an input box and add it to the array of bids
    let inputElement = document.getElementById(inputID);
    let bidInput = Number.parseFloat(inputElement.value);

    if (!bidInput) {
        alert("Please enter a number value.");
        return;
    }

    bidArray.push(bidInput);

    document.getElementById(inputID).value = "";
}

function storeBids() {
    // Create a function that will save the array of bids to localStorage
    localStorage.setItem("key", "value");
    let test = localStorage.getItem("key");
    console.log(test);
    localStorage.setItem("storedBids", JSON.stringify(bidArray));
}

function retrieveBids() {
    // Create a function that will retrieve the array of bids from localStorage
    bidArray = JSON.parse(localStorage.getItem("storedBids"));
    showBids();
}