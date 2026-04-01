//selectores de elementos del DOM
const paletteContainer = document.getElementById("paletteContainer")
const generateBtn = document.getElementById("generateBtn")
const paletteSize = document.getElementById("paletteSize")
const colorFormat = document.getElementById("colorFormat")

//function que genera un color aleatorio en formato HEX
function randomHex(){

const letters = "0123456789ABCDEF"
let color = "#"

for(let i=0;i<6;i++){
color += letters[Math.floor(Math.random()*16)]
}

return color
}

//function que genera un color aleatorio en formato HSL
function randomHSL(){
    const h = Math.floor(Math.random() * 360)
    const s = Math.floor(Math.random() * 100)
    const l = Math.floor(Math.random() * 100)

    return `hsl(${h}, ${s}%, ${l}%)`
}

//elegir color del texto segun el fondo
function getTextColor(color){
    if(color.startsWith("#")){
        const r = parseInt(color.substring(1,3), 16)
        const g = parseInt(color.substring(3,5), 16)
        const b = parseInt(color.substring(5,7), 16)

        const brightness = (r * 299 + g * 587 + b * 114) / 1000

        return brightness > 150 ? "#000" : "#fff"
    }

    if(color.startsWith("hsl")){
        const l = parseInt(color.split(",")[2].replace(")", ""))
        return l > 60 ? "#000" : "#fff"
    }

    return "#000"
}

//function que crea toda la paleta de colores
function generatePalette(){
    console.log("Generando paleta de colores...")
paletteContainer.innerHTML = ""


const size = paletteSize.value

for(let i=0;i<size;i++){

    let color

    if(colorFormat.value === "hex"){
        color = randomHex()
    } else{
        color = randomHSL()
    }

    const box = document.createElement("div")
    box.classList.add("colorBox")

    box.style.background = color
    box.textContent = color
    box.style.color = getTextColor(color)

    paletteContainer.appendChild(box)

    }
}

function updateYear(){
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
}

updateYear();

//agregamos un event listener al botón para generar la paleta cuando se haga click
generateBtn.addEventListener("click", generatePalette)