
let rb_erkek=document.getElementById("erkek")
let rb_kadin=document.getElementById("kadin")
let mesaj=document.getElementById("mesaj")

function askerlikKontrol(){
    if (mesaj.classList.contains("yesil")) {
        mesaj.classList.remove("yesil")

        
    }else if(mesaj.classList.contains("kirmizi")){
        mesaj.classList.remove("kirmizi")

    }else if(mesaj.classList.contains("sari")){
        mesaj.classList.remove("sari")
    }else{
        mesaj.classList.remove("invisible")
    }

    let yas=document.getElementById("yas").value

    mesaj.classList.remove("invisible")

    if(yas){
   if(yas>=20&&rb_erkek.checked){ 
        mesaj.innerHTML=`<strong> Askere gidebilirsiniz </strong>`
        mesaj.classList.add("yesil")
}else{ 
    mesaj.innerHTML=`<strong> Askere gidemezsiniz </strong>`
    mesaj.classList.add("kirmizi")

}
    }else{
        mesaj.innerHTML=`<strong> Yas bilgisini bos gecemezsiniz </strong>`
        mesaj.classList.add("sari")
    }
    


    }

    function temizle(){
        document.querySelector("input[type='number']").value="";
        mesaj.classList.add("invisible");
        rb_erkek.checked=true;
        rb_kadin.checked=false;

    }
  

