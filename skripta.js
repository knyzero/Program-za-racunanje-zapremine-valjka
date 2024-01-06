function zapremina(){
    var r = document.getElementById("r").value;
    var h = document.getElementById("h").value;
    const pi = 3.14;
    var rezultat = r*r*pi*h;
    document.getElementById("rezultat").innerHTML='Vas rezultat je:'+rezultat;
}


