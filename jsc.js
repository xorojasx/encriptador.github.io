var textoNormal = document.getElementById("txt-encripta");
var textoEncrip = document.getElementById("txt-desencripta");
var btnEncript = document.getElementById("btn-enc");
var btnDecript = document.getElementById("btn-des");
var btnPegaEnc = document.getElementById("pegar-enc");
var btnPegaDes = document.getElementById("pegar-des");

/*
    FUNCIONES
*/
function encriptaTexto(e){
    let palabras = textoNormal.value.split(" "); //Se crea array con las palabras ingresadas
    let cantPalabras = palabras.length;
    let frase = ""; //Se inicia la frase encriptada en blanco
    for (i = 0; i < cantPalabras; i++){ //Se recorren las palabras de la frase
        let palabra = palabras[i].split(""); //Se crea array con las letras de la palabra
        let letras = palabra.length;
        for (p = 0; p < letras; p++){ // Se recorren las letras de cada palabra
            if (palabra[p] == "a"){
                frase = frase + "ai"; //Si la letra es a se reemplaza y se egrega a la frase
            }
            if (palabra[p] == "e"){
                frase = frase + "enter"; //Si la letra es e se reemplaza y se egrega a la frase
            }
            if (palabra[p] == "i"){
                frase = frase + "imes"; //Si la letra es i se reemplaza y se egrega a la frase
            }
            if (palabra[p] == "o"){
                frase = frase + "ober"; //Si la letra es o se reemplaza y se egrega a la frase
            }
            if (palabra[p] == "u"){
                frase = frase + "ufat"; //Si la letra es u se reemplaza y se egrega a la frase
            }
            if (palabra[p] != "a" && palabra[p] != "e" && palabra[p] != "i" && palabra[p] != "o" && palabra[p] != "u"){
                frase = frase + palabra[p]; //Si la letra no es vocal se egrega a la frase
            }
        }
        frase = frase + " "; //Se agrega un espacio al final para separar las palabras
    }
    //alert("Encriptando " + frase);
    textoEncrip.value = frase; //Se escribe la frase encriptada en el TEXTAREA encriptado
    textoNormal.value = ""; //Se limpia la frase normal
    frase = "";
    palabra = "";
    cantPalabras = 0;
}
function desencriptaTexto(){
    //alert("Desencriptando");
    let palabras = textoEncrip.value.split(" ");
    let cantPalabras = palabras.length;
    let palabra = "";
    let frase = "";
    for (l = 0; l < cantPalabras; l++){
        frase = frase + palabra;
        let indexA = palabras[l].indexOf("ai");
        if (indexA >= 0) {
            palabra = palabras[l].replace(/ai/g,"a"); // Se reemplazan todos los AI por A
            palabras[l] = palabra;
        }
        indexA = -1;
        let indexE = palabras[l].indexOf("enter");
        if (indexE >= 0) {
            palabra = palabras[l].replace(/enter/g,"e"); // Se reemplazan todos los ENTER por E
            palabras[l] = palabra;
        }
        indexE = -1;
        let indexI = palabras[l].indexOf("imes");
        if (indexI >= 0) {
            palabra = palabras[l].replace(/imes/g,"i"); // Se reemplazan todos los IMES por I
            palabras[l] = palabra;
        }
        indexI = -1;
        let indexO = palabras[l].indexOf("ober");
        if (indexO >= 0) {
            palabra = palabras[l].replace(/ober/g,"o"); // Se reemplazan todos los OBER por O
            palabras[l] = palabra;
        }
        indexO = -1;
        let indexU = palabras[l].indexOf("ufat");
        if (indexU >= 0) {
            palabra = palabras[l].replace(/ufat/g,"u"); // Se reemplazan todos los UFAT por U
            palabras[l] = palabra;
        }
        frase = frase + " ";
        //console.log(frase + l);
    }
    textoNormal.value = frase.trim();
    textoEncrip.value = "";
    frase = "";
    palabra = "";
    cantPalabras = 0;
}
function copiarTextoAlPortaPapeles(e) {
    let contenido = "";
    if (e == "copiar-enc"){
        contenido = document.getElementById("txt-encripta");
    }else{
        contenido = document.getElementById("txt-desencripta");
    }
    navigator.clipboard.writeText(contenido.value)
        .then(() => {
        console.log("Texto copiado exitosamente");
    })
        .catch(err => {
        console.log("Algo salió mal...", err);
    })
    //alert(contenido.value);
}

function pegaContenidoDelPortapapeles2(btnPegar){
    let texto = navigator.clipboard.writeText.toString();
    alert(texto);
}

function pegaContenidoDelPortapapeles(newClip) {
    let texto = navigator.clipboard.writeText(newClip).then(function() {
      /* clipboard successfully set */
      alert(texto.toString());
    }, function() {
      /* clipboard write failed */
      alert("Fail");
    });
  }