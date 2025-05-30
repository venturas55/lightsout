// -1 apagado
// 0 menu
// 1 selection
// 2 creating custom game
// 11 playing game
// 12 playing standar game, with num_p

const pantallas = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
    [
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        0
    ],
    [
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1
    ],
    [
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0
    ],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0
    ]
];

var config = {
    "sound": true,
    "num_pantalla": 0
}

var gameStatus = -1;

var casillas = document.querySelectorAll(".casilla");

var btnOnOff = document.getElementById("btn-onoff");
btnOnOff.addEventListener("click", onoff);

var btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click", start);

var botonSelect = document.getElementById("btn-select");
botonSelect.addEventListener("click", selection);

var botonSound = document.getElementById("btn-sound");
botonSound.addEventListener("click", toggleSound);

var btnHelp = document.getElementById("btn-help");
btnHelp.addEventListener("click", showModal);

function showModal() {
    var modal = document.getElementById("instruccionesModal");
    modal.style.display = "flex"; // Usamos 'flex' para centrar el contenido
}

function cerrarModal() {
    var modal = document.getElementById("instruccionesModal");
    modal.style.display = "none";
}


casillas.forEach(item => {
    item.addEventListener('click', pulse);
});

const delay = millis =>
    new Promise((resolve, reject) => {
        setTimeout(resolve, millis);
    });



function pulse(event) {
    // console.log(event.target.id + "=> " + gameStatus);
    if (gameStatus > 10) {
        playClick1();

        let row = parseInt(event.target.id.charAt(1));
        let col = parseInt(event.target.id.charAt(2));
        event.target.classList.toggle("activo");
        row < 5 ? document.getElementById("c" + (row + 1) + col).classList.toggle("activo") : false;     //DERECHA
        row > 1 ? document.getElementById("c" + (row - 1) + col).classList.toggle("activo") : false;    //IZQUIERDA
        col < 5 ? document.getElementById("c" + row + (col + 1)).classList.toggle("activo") : false;    //ARRIBA
        col > 1 ? document.getElementById("c" + row + (col - 1)).classList.toggle("activo") : false;   //ABAJO
        if (verificarCasillasIluminadas() == 0) {
            playCompleted()
            pantallaInicioCruz();
            if (gameStatus == 12) {
                config.num_pantalla++;
                standardGame();
                return;
            }
            gameStatus = 0;
        }
    } else if (gameStatus == 2) {
        event.target.classList.toggle("activo");
    }

}

function selection() {
    console.log(">" + gameStatus);
    var casillas = document.querySelectorAll(".casilla");
    if (gameStatus == 0) {
        gameStatus = 1;
        removeCasillasIluminadas();
        casillas[0].classList.toggle("activo");
        playClick2();
    }
    if (gameStatus == 1) { //si ya pulsamos select anteriormente
        if (casillas[0].classList.value.includes("activo")) {
            casillas[0].classList.toggle("activo");
            casillas[1].classList.toggle("activo");

        } else if (casillas[1].classList.value.includes("activo")) {
            casillas[1].classList.toggle("activo");
            casillas[2].classList.toggle("activo");
        } else {
            casillas[2].classList.toggle("activo");
            casillas[0].classList.toggle("activo");
        }
        playClick2();
    }



}

function start() {
    var casillas = document.querySelectorAll(".casilla");

    if (gameStatus == 1) {
        casillas[0].classList.value.includes("activo") ? standardGame() : true;
        casillas[1].classList.value.includes("activo") ? randomGame() : true;
        casillas[2].classList.value.includes("activo") ? customGame() : true;
        playClick2();
    }

    if (gameStatus == 2 && verificarCasillasIluminadas() > 1) {
        gameStatus = 11;
        playStart();
    }
    console.log("start: " + gameStatus);
}

async function standardGame() {
    playStart();
    gameStatus = 12;
    await removeCasillasIluminadas();
    var casillas = document.querySelectorAll(".casilla");
    let pantalla = pantallas[config.num_pantalla];
    console.log(casillas);
    console.log(pantalla);
    console.log(pantalla.length);
    for (let i = 0; i < pantalla.length; i++) {
        if (pantalla[i] == 1) {
            casillas[i].classList.toggle("activo");
            console.log(casillas[i].id);
        }
    }
}

async function randomGame() {
    playStart();
    gameStatus = 11;
    await removeCasillasIluminadas();
    var casillas = document.querySelectorAll(".casilla");
    casillas.forEach(item => {
        Math.random() > Math.random() ? item.classList.toggle("activo") : false;
    });
}

async function customGame() {
    gameStatus = 2;
    await removeCasillasIluminadas();
    console.log("creando custom game. gameStatus: " + gameStatus);

}

function pantallaInicioCruz() {
    var casillas = document.querySelectorAll(".casilla");
    casillas.forEach(item => {
        item.id == 'c33' ? item.classList.toggle("activo") : false;
        item.id == 'c23' ? item.classList.toggle("activo") : false;
        item.id == 'c32' ? item.classList.toggle("activo") : false;
        item.id == 'c43' ? item.classList.toggle("activo") : false;
        item.id == 'c34' ? item.classList.toggle("activo") : false;
    });
}

function pantallaInicio() {
    var casillas = document.querySelectorAll(".casilla");
    var casillasid = [];
    casillas.forEach(item => {
        casillasid.push(item.id);
    });
    const index = [0, 5, 10, 15, 20, 21, 22, 23, 24, 19, 14, 9, 4, 3, 2, 1, 6, 11, 16, 17, 18, 13, 8, 7, 12];
    const output = index.map(i => casillasid[i]);
    let cont = 1;
    output.forEach(item => {
        delay(100 * cont).then(_ => {
            document.getElementById(item).classList.toggle("activo");
        });
        delay(125 * cont).then(_ => {
            document.getElementById(item).classList.toggle("activo");
        });
        cont++;
    });
    delay(3100).then(_ => {
        pantallaInicioCruz(); //
    });
    gameStatus = 0;
}

function onoff() {
    if (gameStatus == -1) {
        playIntro();
        pantallaInicio();
    } else {
        removeCasillasIluminadas();
        gameStatus = -1;
    }

}

function toggleSound() {
    config.sound = !config.sound;
    console.log("sound: " + config.sound);
}

async function playIntro() {
    if (config.sound) {
        console.log("Playing intro sound.");
        let audio = document.getElementById("intro");
        await audio.play();
    }
}

async function playClick1() {
    if (config.sound) {
        let audio = document.getElementById("click1");
        await audio.play();
    }
}

async function playClick2() {
    if (config.sound) {
        console.log("Playing click2");
        let audio = document.getElementById("click2");
        await audio.play();
    }
}

function playCompleted() {
    if (config.sound) {
        let audio = document.getElementById("completed");
        audio.play();
    }

}

function playStart() {
    if (config.sound) {
        let audio = document.getElementById("start");
        audio.play();
    }

}

function verificarCasillasIluminadas() {
    var casillas = document.querySelectorAll(".activo");
    return casillas.length;
}

async function removeCasillasIluminadas() {
    var casillas = document.querySelectorAll(".casilla");
    casillas.forEach(item => {
        item.classList.remove("activo");
    });
}
