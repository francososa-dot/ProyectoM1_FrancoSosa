//selectoreas de elementos del DOM
const paletteContainer = document.getElementById("paletteContainer")
const generateBtn = document.getElementById("generateBtn")
const paletteSize = document.getElementById("paletteSize")

//function que genera un color aleatorio en formato HEX
function randomHex(){

const letters = "0123456789ABCDEF"
let color = "#"

//generamos 6 caracteres aleatorios para completar el color HEX
for(let i=0;i<6;i++){
color += letters[Math.floor(Math.random()*16)]
}
//retornamos el color generado
return color
}

//function que crea toda la paleta de colores
function generatePalette(){
    console.log("Generando paleta de colores...")
//limpiamos el contenedor de la paleta antes de generar una nueva
paletteContainer.innerHTML = ""
//Tamaño de la paleta seleccionado por el usuario
const size = paletteSize.value

for(let i=0;i<size;i++){
//generamos un color aleatorio
const hex = randomHex()
//creamos un elemento div para mostrar el color
const colorBox = document.createElement("div")
colorBox.classList.add("colorBox")
//asignamos el color de fondo y el texto del div al color generado
colorBox.style.background = hex
colorBox.textContent = hex
//agregamos el div al contenedor de la paleta
paletteContainer.appendChild(colorBox)

}

}
//agregamos un event listener al botón para generar la paleta cuando se haga clic
generateBtn.addEventListener("click", generatePalette)