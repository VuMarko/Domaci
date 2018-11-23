var audio = new Audio('audio/win.mp3')
var audio1 = new Audio('audio/lose.mp3')
var audio2 = new Audio('audio/tie.mp3')


var igracNaRedu = "X";
document.getElementById("koJeNaPotezu").innerHTML = 'Na redu je igrac: ' + igracNaRedu;


function zaPobedu(igrac, polje1, polje2, polje3) {
    if (document.getElementById(polje1).textContent == igrac &&
        document.getElementById(polje2).textContent == igrac &&
        document.getElementById(polje3).textContent == igrac) {
        return true;
    }
}

function proveraPobede(igrac) {
    return (zaPobedu(igrac, 0, 1, 2) || zaPobedu(igrac, 3, 4, 5) || zaPobedu(igrac, 6, 7, 8) ||
        zaPobedu(igrac, 0, 3, 6) || zaPobedu(igrac, 1, 4, 7) || zaPobedu(igrac, 2, 5, 8) ||
        zaPobedu(igrac, 0, 4, 8) || zaPobedu(igrac, 2, 4, 6));
}


var brojac = 0;
var igra = document.getElementById("igra")
igra.addEventListener("click", function (e) {
    var sadrzaj = document.getElementById(e.target.id);
    if (sadrzaj.textContent === "") {
        sadrzaj.textContent = igracNaRedu;

        brojac++;
        if (igracNaRedu === "X") {
            igracNaRedu = "O";
            sadrzaj.style.color = "blue";
            document.getElementById("koJeNaPotezu").innerHTML = 'Na redu je igrac: ' + igracNaRedu;
        }
        else {
            igracNaRedu = "X";
            sadrzaj.style.color = "red";
            document.getElementById("koJeNaPotezu").innerHTML = 'Na redu je igrac: ' + igracNaRedu;
        }
    }
    if (proveraPobede("X")) {
        document.getElementById("porukaIgre").innerHTML = "Igrac X je pobedio";
        igracNaRedu = "";
        audio.play();
    }
    else if (proveraPobede("O")) {
        document.getElementById("porukaIgre").innerHTML = "Igrac O je pobedio";
        igracNaRedu = "";
        audio1.play();
    }
    else if (brojac >= 9 && !proveraPobede("X") && !proveraPobede("O")) {
        document.getElementById("porukaIgre").innerHTML = "Igra je neresena";
        audio2.play();
    }
});

document.getElementById("btn").addEventListener("click", function () {
    location.reload();
});