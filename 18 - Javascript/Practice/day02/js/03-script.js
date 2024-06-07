const renk1= document.querySelector(".red")
const renk2=document.querySelector(".white")
const renk3=document.querySelector(".blue")
const renk4=document.querySelector(".black")
const renk5=document.querySelector(".green")

const yanlisHal=document.querySelector("#yanlis")


renk1.innerHTML="KIRMIZI"
renk2.innerHTML="BEYAZ";
renk3.innerHTML="MAVI";
renk4.innerHTML="SIYAH";
renk5.innerHTML="YESIL";


let yanlisDurum=`
<div class="row">
<div class="red">Siyah</div>
<div class="white">Kirmizi</div>
<div class="blue">Yesil</div>
<div class="black">Mavi</div>
<div class="green">Beyaz</div>
</div>


`;
yanlisHal.innerHTML=`<h2 style=color:red;text-align:center>YANLIS RENKLER</h2> ${yanlisDurum}`;