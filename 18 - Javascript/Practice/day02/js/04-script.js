
function ustAl(){
    const tabanEl=document.querySelector("#taban").value
    const ustEl=document.querySelector("#ust").value
    const msgSonuc=document.querySelector(".sonuc")

    const sonuc=Number(tabanEl**ustEl)


    msgSonuc.classList.add("ekle")

    msgSonuc.innerHTML= `<b> ${tabanEl}<sup> ${ustEl} </sup> = ${sonuc}  </b>  `


}