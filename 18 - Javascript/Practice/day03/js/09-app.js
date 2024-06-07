
//Kullanıcıdan alınan yaş ve ürün fiyat bilgilerine göre 65 yaştan büyük olanlara
//%50 indirim, diğerlerine %10 indirim uygulayarak bunu mesajla gösterelim.

function hesapla() {
    let yas=document.querySelector("#yas").value
    let fiyat=document.querySelector("#fiyat").value
    let indirimliFiyat=0;
   /*  

    indirimliFiyat=yas>=65 ? fiyat*0.5 : fiyat*0.90;
 */

    //short circuit yontemi ile
    yas>=65 &&(indirimliFiyat=fiyat*0.5)
    yas<65 &&(indirimliFiyat=fiyat*0.90)

    

 


    document.querySelector("#msg").innerHTML=`urunun indirimli fiyati:  ${indirimliFiyat} ₺ `
}