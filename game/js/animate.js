var animateThis;
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
      animateRight();  
    }
    else if (e.keyCode == '39') {
     animateLeft(); 
    }
   else{

   }


   function animateLeft(){

 var id=document.getElementById("board");
 
 id.style.left=id.offsetLeft;

if(id.offsetLeft<1080){

id.style.left=parseInt(id.style.left)+20+"px";



}

}


function animateRight(){
 var id=document.getElementById("board");
 id.style.left=id.offsetLeft;
if(id.offsetLeft>=0){
id.style.left=parseInt(id.style.left)-20+"px";

}


}




}



