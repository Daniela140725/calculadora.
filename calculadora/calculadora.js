const display = document.getElementById("display");
const botones = document.getElementById("botones");
const btnClear = document.getElementById("btn-clear");
const btnEquals = document.getElementById("btn-equals");

function estilos(){
document.getElementById("calculadora").style.cssText="max-width:300px;margin:40px auto;padding:15px;border:2px solid black;border-radius:10px;background:#111;";
display.style.cssText="width:100%;height:50px;font-size:20px;margin-bottom:10px;text-align:right;border-radius:5px;background:black;color:lime;";
botones.style.cssText="display:flex;gap:10px;";

document.querySelectorAll("button").forEach(btn=>{
btn.style.cssText="height:45px;font-size:18px;border-radius:6px;border:1px solid #333;background:#222;color:white;cursor:pointer;";
btn.onmouseover=()=>{btn.style.background="#1a73e8";}
btn.onmouseout=()=>{btn.style.background="#222";}
btn.onmousedown=()=>{btn.style.transform="scale(0.95)";}
btn.onmouseup=()=>{btn.style.transform="scale(1)"}
});
}

function agregar(valor){ display.value+=valor }

function calcular(){
try{ display.value=eval(display.value); }
catch{ display.value="Error"; }
}

function limpiar(){ display.value="" }

document.addEventListener("DOMContentLoaded",()=>{
estilos();

botones.onclick=function(e){
const boton=e.target;
if(boton.dataset.value){ agregar(boton.dataset.value); }
};

btnEquals.onclick=calcular;
btnClear.onclick=limpiar;

document.onkeydown=function(e){
if(e.key==="Enter"){ calcular(); }
if(e.key==="Escape"){ limpiar(); }
if(/[0-9+\-*/.]/.test(e.key)){ agregar(e.key); }
};
});