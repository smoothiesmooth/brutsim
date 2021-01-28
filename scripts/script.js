let money = 0;
let pSlave = 0;
let pClick = 1;
let cClick = 10;
let ccClick = 100;
let cSlave = 25;

function oclick() {
    money += pClick;
    document.getElementById("money").innerHTML = "Ваш счёт: " +  money + "$";
    document.getElementById("click").innerHTML = pClick + "$ за клик";
}

function uclick() {
    if (money>=cClick) {
        money -= cClick;
        pClick = Math.round(pClick + 3);
        cClick = Math.round(cClick + 15);
        document.getElementById("uclick").innerHTML = Math.round(cClick) + "$";
        document.getElementById("money").innerHTML = "Ваш счёт: " + money + "$";
        document.getElementById("click").innerHTML = pClick + "$ за клик";
    } else {
        alert("Недостаточно средств!");
    }
}
function uuclick() {
    if (money>=ccClick) {
        money -= ccClick;
        pClick = Math.round(pClick + 20);
        ccClick = Math.round(ccClick + 50);
        document.getElementById("uuclick").innerHTML = Math.round(ccClick) + "$";
        document.getElementById("money").innerHTML = "Ваш счёт: " + money + "$";
        document.getElementById("click").innerHTML = pClick + "$ за клик";
    } else {
        alert("Недостаточно средств!");
    }
}

function uslave() {
    if (money>=cSlave) {
        money -= cSlave;
        pSlave = Math.round(pSlave + 2);
        cSlave = Math.round(cSlave + 30);
        document.getElementById("uslave").innerHTML = Math.round(cSlave) + "$";
        document.getElementById("money").innerHTML = "Ваш счёт: " +  money + "$";
        document.getElementById("autoSlave").innerHTML = "Автоматический доход: " +  pSlave + "$ в секунду";
    } else {
        alert("Недостаточно средств!");
    }
}

function slaveActive() {
    setInterval(function slave() {
        money += pSlave;
        document.getElementById("money").innerHTML = "Ваш счёт: " +  money + "$";
    }, 1000)    
}

function win() {
    if (money>=1000000) {
        money -= 1000000;
        alert("Ты победил! Заработал миллион и уехал на Гавайи прожигать молодость!");
    } else {
        alert("Недостаточно средств!");
    }
}

document.getElementById("click").innerHTML = pClick + "$ за клик";
document.getElementById("uslave").innerHTML = cSlave + "$";
document.getElementById("uclick").innerHTML = cClick + "$";
document.getElementById("uuclick").innerHTML = ccClick + "$";
slaveActive();