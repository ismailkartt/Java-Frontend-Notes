let mesaj=document.querySelector(".mesaj")


function hesapla() {
    let vize=document.querySelector("#vize").value
    let final=document.querySelector("#final").value

    let sonuc=Number(vize*0.3+final*0.7)

    let not="";
    switch(true){
         case sonuc <45:
            not="FF";
            break;
         case sonuc >=45 && sonuc <50:
            not="DD"
            break;
         case sonuc >=50 && sonuc <60:
            not="DC"
            break;
         case sonuc >=60 && sonuc <70:
            not="CC";
            break;
         case sonuc >=70 && sonuc <80:
            not="CB";
            break;
         case sonuc >=80 && sonuc <90:
            not="BB";
            break;
         case sonuc >=90 && sonuc <=100:
            not="AA";
            break;
            default :
            not="Hatali giris yaptiniz";

    }

    mesaj.classList.remove("d-none")
    mesaj.classList.add("mesaj")
    mesaj.innerHTML=`Ortalamaniz: ${sonuc}, Notunuz: ${not} `
    
}

function temizle() {
    mesaj.innerHTML=""
    mesaj.classList.add("d-none")
    
}