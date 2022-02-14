// const playerBatu = document.getElementById("player-batu");
// const playerKertas = document.getElementById("player-kertas");
// const playerGunting = document.getElementById("player-gunting");

const comBatu = document.querySelector(".com-batu");
const comKertas = document.querySelector(".com-kertas");
const comGunting = document.querySelector(".com-gunting");

// const playerWin = document.getElementById("player-win");
// const comWin = document.getElementById("com-win");
// const draw = document.getElementById("draw");


// player pick highlight

const hands = document.querySelectorAll(".player");

const removeAll = () => {
  hands.forEach((element) => {
    element.classList.remove("highlight");
  });
};

hands.forEach((element) => {
  element.onclick = () => {
    removeAll();
    element.classList.add("highlight");
  };
});


// computer random pick & highlight

let computerPick = ""

function getComPick() {
    const comPick = Math.floor(Math.random() * 3);
    console.log("random: ", comPick);

    if (comPick === 0) computerPick = 'batu';
    if (comPick === 1) computerPick = 'kertas';
    if (comPick === 2) computerPick = 'gunting';
};


const comHands = document.querySelectorAll(".com")

function comHighlight() {
    comHands.forEach((element) => {
        element.classList.remove("highlight");
        console.log(element)
    });
      
    if (computerPick === 'batu') comBatu.classList.add("highlight");
    if (computerPick === 'kertas') comKertas.classList.add("highlight");
    if (computerPick === 'gunting') comGunting.classList.add("highlight");
};

// result function

let showResult = ""


function getResult(playerPick, comPick) {
    if (playerPick == comPick) return "draw";
    if (playerPick == "batu") return (comPick == "gunting") ? "playerWin" : "comWin";
    if (playerPick == "gunting") return (comPick == "batu") ? "comWin" : "playerWin";
    if (playerPick == "kertas") return (comPick == "gunting") ? "comWin" : "playerWin";
}

function popResult(result) {
    if (result === 'draw') {
        document.getElementById("draw").style.display = "block";
    }
    else if (result === 'playerWin') {
        document.getElementById("player-win").style.display = "block";
    }
    else if (result === 'comWin') {
        document.getElementById("com-win").style.display = "block";
    } else {
        return null;
    };
};




const chooseBatu = document.querySelector(".batu");
chooseBatu.addEventListener('click', function() {
    // alert("oke")
    getComPick()
    comHighlight()
    const computerTurn = computerPick;
    const playerPick = chooseBatu.className;
    const result = getResult(playerPick, computerTurn)
    popResult(result)
    console.log('player : ' + playerPick);
    console.log('comp : ' + computerTurn);
    console.log('hasil : ' + result);
});


const chooseKertas = document.querySelector(".kertas");
chooseKertas.addEventListener('click', function() {
    // alert("oke")
    getComPick()
    comHighlight()
    const computerTurn = computerPick;
    const playerPick = chooseKertas.className;
    const result = getResult(playerPick, computerTurn)
    popResult(result)
    console.log('player : ' + playerPick);
    console.log('comp : ' + computerTurn);
    console.log('hasil : ' + result);
});

const chooseGunting = document.querySelector(".gunting");
chooseGunting.addEventListener('click', function() {
    // alert("oke")
    getComPick()
    comHighlight()
    const computerTurn = computerPick;
    const playerPick = chooseGunting.className;
    const result = getResult(playerPick, computerTurn)
    popResult(result)
    console.log('player : ' + playerPick);
    console.log('comp : ' + computerTurn);
    console.log('hasil : ' + result);
});
