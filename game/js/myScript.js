var animateMe; 

 function startAnimate(id){
 top=id.offsetTop;
 left=id.offsetLeft;

if(parseInt(id.style.top)==0){
myFun();
}
else if(parseInt(id.style.top)>0){
stop();
reverse();
}
else{
stop();
}


function myFun(){
id.style.top=parseInt(id.style.top)+10+"px";
animateMe=setTimeout(myFun,10);
if(parseInt(id.style.top)>document.getElementById("container").offsetHeight-150){
reverse();
}
}

function reverse(){
id.style.top=parseInt(id.style.top)-5+"px";
animateMe=setTimeout(reverse,10);
if(parseInt(id.style.top)==0){
stop();
}
}

function stop(){
clearTimeout(animateMe);
}
}
	
function stopBtn(){
clearTimeout(animateMe);
document.getElementById("myImage").style.top=0;

}	
  

/*
 function startAnimate(id){
 
 id.style.top=id.offsetTop;
if(parseInt(id.style.top)==0){
myFun();
}
else if(parseInt(id.style.top)>0){
stop();
reverse();
}
else{
stop();
}


function myFun(){
id.style.top=parseInt(id.style.top)+10+"px";
animateMe=setTimeout(myFun,10);
if(parseInt(id.style.top)>document.getElementById("container").offsetHeight-150){
reverse();
}
}

function reverse(){
id.style.top=parseInt(id.style.top)-5+"px";
animateMe=setTimeout(reverse,10);
if(parseInt(id.style.top)==0){
stop();
}
}

function stop(){
clearTimeout(animateMe);
}
}
	
function stopBtn(){
clearTimeout(animateMe);
document.getElementById("myImage").style.top=0;

}	
  
*/
	  