const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
    jump();
})

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 1000)
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 115 && cactusLeft > 0 && dinoTop >= 240 ) {
        
        console.log("cactusLeft = "+cactusLeft);
        console.log("dinoTop = "+dinoTop);
        alert('Game over!')
    }
}, 10)