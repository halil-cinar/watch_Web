

function getHours(){
    return new Date().getHours()
}
function getMinutes(){
    return new Date().getMinutes()
}
function getSeconds(){
    return new Date().getSeconds()
}
var saniye=document.getElementsByClassName("saniye")[0]
var akrep=document.getElementsByClassName("akrep")[0]
var yelkovan=document.getElementsByClassName("yelkovan")[0]
var icYuvarlak=document.getElementsByClassName("icYuvarlak")[0]
var disYuvarlak=document.getElementsByClassName("disYuvarlak")[0]

var i=-2
function timer(){
setTimeout(()=>{
    saniye.style.transform = 'rotate('+getSeconds()*6+'deg)';
    akrep.style.transform = 'rotate('+((getHours()*30)+getMinutes()/2.2)+'deg)';
    yelkovan.style.transform = 'rotate('+getMinutes()*6+'deg)';
    i++;
   
    //animasyonEski()

    try {
        sayıAnimasyon("r" + getMinutes() / 5,"#000bde")
        try {
            sayıAnimasyon("r" + getHours(),"#00840d")
        } catch (e) {
            sayıAnimasyon("r" + (getHours() - 12),"#00840d")
        }
    } catch (e) {
    }
    timer()
},1000)
}
animation1("icYuvarlak",0)
//    transform: rotate(380deg);


function animation1(elementID,i){//recursive call
let element=document.getElementById(elementID);

setTimeout(()=>{
    if(i==0){
        
        element.style.background="rgb(57, 57, 57)"
    }
   else{
    element.style.background="linear-gradient("+i+"deg,#6a0000,rgb(57,57,57),#6a0000)"
   }
    i++
    if(i==(3600*20)){i=0;}
    animation1(elementID,i)
},10)
}





timer()
pauseAnimation();



function sayıAnimasyon(elementID,color){
   // element.classList.remove("class")
   //document.getElementById("r12").classList.add("class")
   let textShadow="0 0 7px "+color+", 0 10px "+color+",0 0 21px "+color+",0 0 32px "+color+",0 0 52px "+color+",0 0 72px "+color+",0 0 90px "+color+",0 0 7px "+color+", 0 10px "+color+",0 0 21px "+color+",0 0 32px "+color+",0 0 52px "+color+",0 0 72px "+color+",0 0 90px "+color+",0 0 7px "+color+", 0 10px "+color+",0 0 21px "+color+",0 0 32px "+color+",0 0 52px "+color+",0 0 72px "+color+",0 0 90px "+color+",0 0 7px "+color+", 0 10px "+color+",0 0 21px "+color+",0 0 32px "+color+",0 0 52px "+color+",0 0 72px "+color+",0 0 90px "+color+",0 0 7px "+color+", 0 10px "+color+",0 0 21px "+color+",0 0 32px "+color+",0 0 52px "+color+",0 0 72px "+color+",0 0 90px "+color+"   "
   document.getElementById(elementID).style.transition="2s all"
   document.getElementById(elementID).style.textShadow=textShadow;
   document.getElementById(elementID).style.boxShadow="0 0 92px "+color+",0 0 92px "+color+", 0 0 72px "+color+",0 0 92px "+color+", 0 0 35px "+color+",0 0 35px "+color+", 0 0 35px "+color+",0 0 35px "+color+", 0 0 35px "+color+",0 0 35px "+color+", 0 0 92px "+color+""
   setTimeout(()=>{
    document.getElementById(elementID).style.textShadow="none"
    document.getElementById(elementID).style.boxShadow="none"
    
   },2500)
   
   document.getElementById(elementID).style.display="none"
   document.getElementById(elementID).style.display="block"
   

    
    
}