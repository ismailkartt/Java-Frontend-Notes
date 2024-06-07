
let message=document.querySelector("#mesaj")

function gonder(){
   let isim=document.querySelector("#ad").value 
   let meslek=document.querySelector("#meslek").value 

message.classList.remove("d-none")
message.classList.add("d-block")

   if(!isim ||!meslek){
   
    message.innerHTML= `Lutfen formu eksiksiz doldurunuz `

   }else{
    message.innerHTML=`Sayin ${meslek} ${isim} Aramiza Hosgeldiniz`
   }
}
function sil(){
 message.innerHTML=""
message.classList.add("d-none")

}



