const titulo = document.getElementById ("title1");
titulo.textContent="Nuevo Titulo"; //Asigna nuevo titulo

//Obtengo el nodo padre
const menu = document.getElementById("menu");
//Creamos un nuevo nodo
let li = document.createElement ('li');
li.textContent = "Nosotros";
//Reemplazando el primer item de la lista
menu.replaceChild (li, menu.firstChild);

//Eliminando el segundo de la lista elemento Inicio
menu.children[1].remove();

//Obtengo el elemento number y le doy un evento
const text = document.getElementById ('txtNumero');
text.setAttribute ('max',4);
text.addEventListener ("change", cambia, false);

const inputText = document.getElementById("generaInput");
const valores = ["Nombre","Apellido Paterno","Apellido Materno","Telefono"];

function cambia (){
    //Obtiene el valor de txtNumero, cantidad de inputs a crear
    var cantInput = text.value;
    inputText.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (var i = 0; i<cantInput; i++){
        const p = document.createElement ('p');
        const label = document.createElement ('label');
        const input = document.createElement('input');
        input.setAttribute('type','text');
        label.textContent = valores[i];
        p.appendChild (label);
        label.appendChild (input);
        fragment.appendChild (p);
    }
    inputText.appendChild (fragment);
}
