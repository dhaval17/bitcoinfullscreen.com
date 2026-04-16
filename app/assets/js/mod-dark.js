const btnSwitch=document.querySelector('#switch');
const btnVideo=document.getElementById('#gotas');
 var contador=1;
 
 



btnSwitch.addEventListener('click',() =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    document.getElementById('price').classList.remove("tagPrice");
    document.getElementById("price").classList.add("greentag","redtag");
    document.getElementById('video_background').classList.remove("video-fondo");
    document.getElementById('gotas').classList.remove("active2");
    document.getElementById('hour').classList.remove("tagPrice");
    // document.getElementById('bitcoin').classList.remove("tagPrice");
    // document.getElementById('desinged').classList.remove("tagPrice");
    // document.getElementById('link-contact').classList.remove("tagPrice");
    document.getElementById('currency-sym').classList.remove("tagPrice");
    document.getElementById('tfdiff').classList.remove("tagPrice");
    document.getElementById('navi1').classList.remove("tagPrice");
    document.getElementById('navi2').classList.remove("tagPrice");
    document.getElementById('navi3').classList.remove("tagPrice");
    document.getElementById('navi4').classList.remove("tagPrice");
    // document.getElementById("navi1").classList.add("tagPrice1");
    // document.getElementById("navi2").classList.add("tagPrice1");
    // document.getElementById("navi3").classList.add("tagPrice1");
    // document.getElementById("navi4").classList.add("tagPrice1");
    document.getElementById("titulo").classList.toggle("titulo2");
    document.getElementById("titulo").classList.remove("titulo3");
    document.getElementById("navi1").classList.toggle("naviDark");
    document.getElementById("navi2").classList.toggle("naviDark");
    document.getElementById("navi3").classList.toggle("naviDark");
    document.getElementById("navi4").classList.toggle("naviDark");
    document.getElementsByClassName("active")[0].style.color="#999999 !important";
    
    
})

   function cambiarColorTxtMenu(){
    //  var naviAct=document.getElementsByClassName("active");
    //  alert(naviAct);
   
      
    //  if(naviAct.style.color="#3A3633 ")
    //  naviAct.style.color="#333333"
    // document.getElementById("p2").style.color = "blue";
    }

function video(){
    // alert("listo");
   i
    document.getElementById("gotas").classList.toggle("active2");
    document.getElementById("video_background").classList.toggle("video-fondo");
    // document.getElementById("price").classList.toggle("tagPrice");
    // document.getElementById("price").style.color='white';
    document.getElementById('price').classList.remove('greentag', 'redtag');
    document.getElementById("price").classList.add("tagPrice");
    document.getElementById("hour").classList.add("tagPrice");
    // document.getElementById("bitcoin").classList.add("tagPrice");
    // document.getElementById("desinged").classList.add("tagPrice");
    // document.getElementById("link-contact").classList.add("tagPrice");
    document.getElementById("currency-sym").classList.add("tagPrice");
    // document.getElementById("navi2").classList.toggle("tagPrice");
    document.getElementById("tfdiff").classList.add("tagPrice");
    document.getElementById("navi1").classList.add("tagPrice");
    document.getElementById("navi2").classList.add("tagPrice");
    document.getElementById("navi3").classList.add("tagPrice");
    document.getElementById("navi4").classList.add("tagPrice");
    document.getElementById("titulo").classList.toggle("titulo3");

    
    
    

}
document.getElementById("gotas").onclick =function(e){
    contador++;
    // alert(contador);
   if (contador%2==0) {
    //    alert("si");
       video();
   } else {
    //    alert("no");
       document.getElementById('price').classList.remove("tagPrice");
    document.getElementById("price").classList.add("greentag","redtag");
    document.getElementById('video_background').classList.remove("video-fondo");
    document.getElementById('gotas').classList.remove("active2");
    document.getElementById('hour').classList.remove("tagPrice");
    // document.getElementById('bitcoin').classList.remove("tagPrice");
    // document.getElementById('desinged').classList.remove("tagPrice");
    // document.getElementById('link-contact').classList.remove("tagPrice");
    document.getElementById('currency-sym').classList.remove("tagPrice");
    document.getElementById('tfdiff').classList.remove("tagPrice");
    document.getElementById('navi1').classList.remove("tagPrice");
    document.getElementById('navi2').classList.remove("tagPrice");
    document.getElementById('navi3').classList.remove("tagPrice");
    document.getElementById('navi4').classList.remove("tagPrice");
   }
    
    
}