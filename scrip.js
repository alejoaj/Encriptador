const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnencriptar(){
    const textoencriptado = encriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = ""
    
}

function encriptar(stringencriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringencriptada = stringencriptada.toLowerCase()
    
    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringencriptada.includes(matrizcodigo[i][0])){
            stringencriptada = stringencriptada.replaceAll(matrizcodigo[i][0] , matrizcodigo[i][1])
        }
    }

    return stringencriptada
}

function btndesencriptar(){
    const textoencriptado = desencriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = ""
}

function desencriptar(stringdesencriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringdesencriptada = stringdesencriptada.toLowerCase()
    
    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringdesencriptada.includes(matrizcodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizcodigo[i][1] , matrizcodigo[i][0])
        }
    }

    return stringdesencriptada
}
