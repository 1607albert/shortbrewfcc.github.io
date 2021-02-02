const botonAnterior = document.querySelector(".fa-angle-double-left");
const botonSiguente = document.querySelector(".fa-angle-double-right");
const imagen1 = document.querySelector(".circle1");
const imagen2 = document.querySelector(".circle2");
const imagen3 = document.querySelector(".circle3");
const banner = document.querySelector("body > div.banner-container > div > img");
// document.querySelector(".img-banner")

const arrayImagenes =[
    "img\\cerveza1.png",
    "img\\cerveza2.png",
    "img\\cerveza3.png"];
    
var x = 0

// const carrousel = (x) =>{
    
    botonAnterior.addEventListener("click",(e)=>{
        if(x<1){
            x = 2;
        }else{
            x=x-1;
        }
        banner.src=arrayImagenes[x]; })
     
    botonSiguente.addEventListener("click",(e)=>{
        if(x>1){
            x = 0;
        }else{
            x=x+1
        } banner.src=arrayImagenes[x];
        console.log(x) })

    imagen1.addEventListener("click",(e)=>{
        x= 0
        banner.src=arrayImagenes[x];})
        
    imagen2.addEventListener("click",(e)=>{
        x= 1
        banner.src=arrayImagenes[x];})
       
    imagen3.addEventListener("click",(e)=>{
        x= 2
        banner.src=arrayImagenes[x];})
       

        


    // };
    console.log(arrayImagenes[x])
    // carrousel(x);   
    
   