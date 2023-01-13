
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
// Confirmacion de mayusculas

window.addEventListener("load", function () {
    // Obtener el elemento textarea y el elemento div de warning
    const textarea = document.getElementById("textarea");
    const warning = document.getElementById("warning");
    const munheco = document.getElementById("munheco");
    let encriptados = [];
    let desencriptados = [];
    var textos = [];


    if (encriptados.length === 0 && desencriptados.length === 0) {

        // Establece la URL de la imagen
        // Agrega la imagen al elemento "container"
        munheco.style.visibility = 'visible';
        document.getElementById("textos-encriptados").innerHTML = "Aquí van tus textos";
        document.getElementById("header").innerHTML = "Ningún mensaje fue encontrado";
    }
    if (encriptados.length > 3) {
        document.getElementById("textos-encriptados").style.marginTop = '40px';
    }
    // Añadir un evento para detectar cuando el usuario escribe en el textarea
    textarea.addEventListener("input", function () {
        // Obtener el valor actual del textarea
        let text = this.value;

        // Si el texto está vacío o el primer carácter no es una letra, no hacer nada
        if (text === "" || !text[0].match(/[a-z]/i)) {
            return;
        }

        // Mostrar el mensaje de advertencia si se utiliza una letra mayúscula
        if (/[A-Z]/.test(text)) {
            warning.innerHTML = "Por favor, no utilices mayúsculas";
            warning.style.visibility = "visible";
            warning.classList.add("shake");
        }
        else if (text === '') {
            warning.innerHTML = "Por favor, agrega una palabra a encriptar";
            warning.classList.add("shake");
            setTimeout(function () {
                warning.classList.remove('shake');
            }, 1000);
        } else if (text.length === 1) {
            warning.innerHTML = "Debe tener al menos 2 caracteres";
            warning.classList.add("shake");
            setTimeout(function () {
                warning.classList.remove('shake');
            }, 2000);
        } else if (text.match(/\d/)) {
            warning.innerHTML = "Sólo se pueden usar letras sin acentos";
            warning.classList.add("shake");
            setTimeout(function () {
                warning.classList.remove('shake');
            }, 1000);
        } else {
            // Ocultar el mensaje de advertencia y quitar la clase "shake" si no se utiliza una letra mayúscula
            warning.innerHTML = "";
            warning.style.visibility = "hidden";
            warning.classList.remove("shake");
        }
    });

    // Añadir un evento para evitar que el usuario escriba letras mayúsculas
    textarea.addEventListener("keydown", function (event) {
        // Obtener el carácter que se está escribiendo
        const char = String.fromCharCode(event);
        if (char.match(/[A-Z]/)) {
            // Cancelar la acción
            event.preventDefault();
        }
    });

    const buttonEncriptar = document.getElementById('encriptar');

    buttonEncriptar.addEventListener("click", function Encriptar() {
        const textarea = document.getElementById('textarea');
        const warning = document.getElementById("warning");
        const munheco = document.getElementById("munheco");
        text = textarea.value;
        vacio = text.length = 0;

        if (!vacio) {
            if (/[A-Z]/.test(text)) {
                warning.innerHTML = "Sólo se pueden usar letras minúsculas sin acentos";
                warning.classList.add("shake");
                setTimeout(function () {
                    warning.classList.remove('shake');
                }, 1000);
            } else if (text === '') {
                warning.innerHTML = "Por favor, agrega una palabra a encriptar";
                warning.classList.add("shake");
                setTimeout(function () {
                    warning.classList.remove('shake');
                }, 1000);
            } else if (text.length === 1) {
                warning.innerHTML = "Debe tener al menos 2 caracteres";

                warning.classList.add("shake");
                setTimeout(function () {
                    warning.classList.remove('shake');
                }, 1000);
            } else if (text.match(/\d/)) {
                warning.innerHTML = "Sólo se pueden usar letras sin acentos";

                warning.classList.add("shake");
                setTimeout(function () {
                    warning.classList.remove('shake');
                }, 1000);
            } else {
                warning.innerHTML = "";
                warning.style.visibility = "hidden";
                warning.classList.remove("shake");
                const encrypted =
                    text.replace(/e/g, 'enter')
                        .replace(/i/g, 'imes')
                        .replace(/a/g, 'ai')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat');
                encriptados.push(encrypted);
                console.log(encrypted);
                munheco.style.display = 'none';
                textarea.value = '';
                document.getElementById("header").innerHTML = "Tus mensajes encriptados:";
                let listaEncriptados = encriptados.map(texto => `<li>${texto}</li>`).join('');
                document.getElementById("textos-encriptados").innerHTML = `<ol>${listaEncriptados}</ol>`;
            }
        }
    });

    const buttonDesencriptar = document.getElementById('desencriptar');

    function Desencriptar(textarea) {

        text = textarea.value

        if (encriptados.length === 0) {
            const desencrypted =
                text
                    .replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');
            desencriptados.push(desencrypted);
            document.getElementById("header").innerHTML = "Tus mensajes desencriptados:";
            let listaDesencriptados = desencriptados.map(texto => `<li>${texto}</li>`).join('');
            document.getElementById("textos-encriptados").innerHTML = `<ol>${listaDesencriptados}</ol>`;
            textarea.value = '';
        } else if (encriptados.length > 0 && text !== '') {
            let desencriptar = encriptados.shift();
            const desencriptado =
                desencriptar
                    .replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');

            desencriptados.push(desencriptado);
            textarea.value = '';
            document.getElementById("header").innerHTML = "Tus mensajes desencriptados:";
            let listaDesencriptados = desencriptados.map(texto => `<li>${texto}</li>`).join('');
            document.getElementById("textos-encriptados").innerHTML = `<ol>${listaDesencriptados}</ol>`;
        }
        console.log('encriptados ' + encriptados);
        console.log('desencriptados ' + desencriptados);
    }
    buttonDesencriptar.addEventListener("click", function () {
        // Pasar como parámetro el elemento textarea
        Desencriptar(textarea);
    });
});








