/* //!ornek-1
// diktortgenin alanini hesaplayan kodu yaziniz
let uzunKenar=prompt("Lutfen uzun kenari giriniz")
let kisaKenar=prompt("Lutfen kisa kenari giriniz")

let alan= Number(kisaKenar)*Number(uzunKenar);

window.alert(`Diktortgenin alani ${alan}`) */

/* //!ornek-2
let piNumber = 3.14;
console.log(typeof piNumber);

let str = "Satranc";
console.log(typeof str);

let x = null;
let y = undefined;
let z = "";
console.log(Boolean(x));
console.log(Boolean(y));
console.log(Boolean(z)); */

/* //!ornek-3
let name1 = "Ali";
let name2 = "Oya";
let name3 = "Can";
let name4 = null;
let name5 = "";
let name6 = undefined;
//and op false arar
//or op true arar

console.log(name1 && name2 && name3); //Can
console.log(name1 &&name2&& name4 && name1) //null
console.log(name4||name5||name2||name6)//Oya
console.log(name4||name5||false||name6)//undefined */

/* //!ornek-4
//== degeri kontrol etmek icin kullaniriz
//degerle birlikte type kontrolu yapmak icin === kullaniriz

let num1=40;
let num2="30";

console.log(num1=="40")//true
console.log(num1==="40")//false
console.log(num2!==30n)//true
console.log(num1+num2>10)//true
console.log(num1>num2+10)//false

 */

/* //!Ornek-5

// verilen sayinin birler, onlar ve yuzler basamagindaki sayiyi bulup
//toplamini yazan js kodunu yaziniz

const sayi=823;
let birlerBas=sayi%10;
let onlarBas=Math.floor(sayi/10)%10;
let yuzlerBas=Math.floor(sayi/100)
let toplam=birlerBas+onlarBas+yuzlerBas;

console.log(`${sayi}'sinin toplami: ${toplam} `)
 */

