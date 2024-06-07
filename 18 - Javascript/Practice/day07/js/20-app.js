let sayac=document.querySelector(".sayac")
let gun=document.querySelector("#gun")
let saat=document.querySelector("#saat")
let dakika=document.querySelector("#dakika")
let saniye=document.querySelector("#saniye")

let birthday="11 September 2023";


const geriSayim = () => {
    let newBirthday= new Date(birthday)
    console.log(newBirthday)

    let today=new Date()
    console.log(today)
    
   let totalSeconds=Math.floor( (newBirthday-today)/1000) 
   console.log(totalSeconds)

}

geriSayim();


setInterval(function(){
    console.log("hello Js")

},1000)

