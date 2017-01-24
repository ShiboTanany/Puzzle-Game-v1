var i=0;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop1(ev) {
var date = ev.dataTransfer.getData("text");
//alert(document.getElementById(date).id);
if("drag1" == (document.getElementById(date).id)){    
ev.preventDefault();
   
    
    ev.target.src=document.getElementById(date).src;
    document.getElementById(date).parentNode.removeChild(document.getElementById(date));
i++;
if(i==4){

document.getElementById("x").innerHTML="you win !join booty :D";
}
}
else{
    ev.target.src= ev.target.src;
    
}

}
function drop2(ev) {
var date = ev.dataTransfer.getData("text");
//alert(document.getElementById(date).id);

if("drag2" == (document.getElementById(date).id)){    
ev.preventDefault();
   
    
    ev.target.src=document.getElementById(date).src;
    document.getElementById(date).parentNode.removeChild(document.getElementById(date));
i++;
if(i==4){

document.getElementById("x").innerHTML="you win !join booty :D";
}
}else{
    ev.target.src= ev.target.src;
    
}

}
function drop3(ev) {
var date = ev.dataTransfer.getData("text");
//alert(document.getElementById(date).id);
if("drag3" == (document.getElementById(date).id)){    
ev.preventDefault();
   
    
    ev.target.src=document.getElementById(date).src;
    document.getElementById(date).parentNode.removeChild(document.getElementById(date));
i++;
if(i==4){

document.getElementById("x").innerHTML="you win !join booty :D";
}}
else{
    ev.target.src= ev.target.src;
    
}

}
function drop4(ev) {
var date = ev.dataTransfer.getData("text");
//alert(document.getElementById(date).id);
if("drag4" == (document.getElementById(date).id)){    
ev.preventDefault();
   
    
    ev.target.src=document.getElementById(date).src;
    document.getElementById(date).parentNode.removeChild(document.getElementById(date));
i++;
if(i==4){

document.getElementById("x").innerHTML="you win !join booty :D";
}
}else{
    ev.target.src= ev.target.src;
    
}


}
