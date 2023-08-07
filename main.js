const championsTittle= document.getElementById("championsTittle");
const ligaTittle=document.getElementById("ligaTittle");
const mundialTittle=document.getElementById("mundialTittle");
const libreTittle=document.getElementById("libreTittle");
const masTittle=document.getElementById("masTittle")

const containerOptionsImg= document.getElementById("containerOptionsImg")
const tittleImg=document.getElementById("tittleImg")

const champions= document.getElementById("champions");
const liga= document.getElementById("liga");
const mundial= document.getElementById("mundial");
const libre= document.getElementById("libre");
const mas= document.getElementById("mas");


championsTittle.addEventListener("click", ()=>{
    championsTittle.style.borderBottom= "3px solid var(--rosa)"
    ligaTittle.style.border="none"
    mundialTittle.style.border="none"
    libreTittle.style.border="none"
    masTittle.style.border="none"
    
    champions.style.display="block"
    liga.style.display="none"
    mundial.style.display="none"
    libre.style.display="none"
    mas.style.display="none"

    tittleImg.innerHTML="Champions"
    containerOptionsImg.style.backgroundImage="url(imagenes/Fondo_Champions.png)"
 
})

ligaTittle.addEventListener("click", ()=>{
    championsTittle.style.borderBottom= "none"
    ligaTittle.style.borderBottom="3px solid var(--rosa)"
    mundialTittle.style.borderBottom="none"
    libreTittle.style.borderBottom="none"
    masTittle.style.borderBottom="none"

    
    champions.style.display="none"
    liga.style.display="block"
    mundial.style.display="none"
    libre.style.display="none"
    mas.style.display="none"

    tittleImg.innerHTML="Liga"
    containerOptionsImg.style.backgroundImage="url(imagenes/Fondo_liga.png)"
})

mundialTittle.addEventListener("click", ()=>{
    championsTittle.style.borderBottom= "non"
    ligaTittle.style.borderBottom="none"
    mundialTittle.style.borderBottom="3px solid var(--rosa)"
    libreTittle.style.borderBottom="none"
    masTittle.style.borderBottom="none"
    

    
    champions.style.display="none"
    liga.style.display="none"
    mundial.style.display="block"
    libre.style.display="none"
    mas.style.display="none"
     
    

    tittleImg.innerHTML="Mundial"
    containerOptionsImg.style.backgroundImage="url(imagenes/Fondo_Mundial.png)"
    
})

libreTittle.addEventListener("click", ()=>{
    championsTittle.style.borderBottom= "none"
    ligaTittle.style.borderBottom="none"
    mundialTittle.style.borderBottom="none"
    libreTittle.style.borderBottom="3px solid var(--rosa)"
    masTittle.style.borderBottom="none"

    
    champions.style.display="none"
    liga.style.display="none"
    mundial.style.display="none"
    libre.style.display="block"
    mas.style.display="none"

    tittleImg.innerHTML="Libre"
    containerOptionsImg.style.backgroundImage="url(imagenes/Fondo_libre.png)"
})

masTittle.addEventListener("click", ()=>{
    championsTittle.style.borderBottom= "none"
    ligaTittle.style.borderBottom="none"
    mundialTittle.style.borderBottom="none"
    libreTittle.style.borderBottom="none"
    masTittle.style.borderBottom="3px solid var(--rosa)"

    
    champions.style.display="none"
    liga.style.display="none"
    mundial.style.display="none"
    libre.style.display="none"
    mas.style.display="block"

    tittleImg.innerHTML="Más"
    containerOptionsImg.style.backgroundImage="url(imagenes/Fondo_Mas.png)"
})








