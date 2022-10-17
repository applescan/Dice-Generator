function generateRandomNum6() {
    let dice6 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dice6").innerHTML = dice6;
}

function generateRandomNum10() {
    let dice10 = Math.floor((Math.random() * 10) + 1);
    document.getElementById("dice10").innerHTML = dice10;
}

function generateRandomNum() {
    let num = document.getElementById("myNumber").value;
    let dicex = Math.floor((Math.random() * num) + 1);
    document.getElementById("dicex").innerHTML = dicex;
}