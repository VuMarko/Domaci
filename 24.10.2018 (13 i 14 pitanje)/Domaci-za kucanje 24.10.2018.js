

// 13 - Napišite funkciju pomoću koje možemo proslediti niz css pravila u formatu {color:'red','background-color':'blue'} a ona te stilove primeniti na element
function css(element, cssRules) {
    for (var stil in cssRules) {
        var osobineNiz = stil.split('-'),
            osobina = '';
        for (var i = 0; i < osobineNiz.length; i++) {
            if (i == 0) {
                osobina = osobineNiz[i];
            } else {
                osobina += osobineNiz[i].substr(0, 1).toUpperCase() + osobineNiz[i].substr(1);
            }
        }
        element.style[osobina] = cssRules[stil];
    }
}

// 14 - Kreirajte element koji ćete preko tastature moći da pomerate po stranici. takođe napravite tabelu za logovanje pretisnutih tastera kao u primeru ispod
document.body.innerHTML += "<div id='loptica' style='position: absolute;top:0;left:50%;'>X</div>";
var loptica = document.getElementById('loptica'),
    y = 0,
    x = (innerWidth / 2 - 25);
loptica.style.left = x + 'px';
document.body.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) { //if(event.key=="ArrowLeft"){
        x -= 25;
    } else if (event.keyCode == 39) {
        x += 25;
    } else if (event.keyCode == 38) {
        y -= 25;
    } else if (event.keyCode == 40) {
        y += 25;
    }
    loptica.style.left = x + 'px';
    loptica.style.top = y + 'px';
});

document.body.innerHTML += '<table><thead><tr><td>key</td><td>keyCode</td><td>altKey</td><td>shiftKey</td><td>ctrlKey</td></tr></thead><tbody id="tastatura_log"></tbody></table>';
document.body.addEventListener('keydown', function (e) {
    var osobineDogadjaja = [e.key, e.keyCode, e.altKey, e.shiftKey, e.ctrlKey];
    document.getElementById('tastatura_log').insertAdjacentHTML('afterbegin', "<tr><td>" + osobineDogadjaja.join('</td><td>') + "</td></tr>");
    e.preventDefault();
    e.stopPropagation();
});

