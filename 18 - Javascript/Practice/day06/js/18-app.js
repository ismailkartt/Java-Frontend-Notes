// 1- Bir dizideki pozitif ve çift sayıların toplamını ve adedini bulun.
const dizi = [-5, 6, 3, -5, -7, 4, 12, -58, 72];


let toplam=0;
let adet=0;
/* 
for(let i=0; i<dizi.length;i++){

    if(dizi[i]>0 && dizi[i]%2==0){
        toplam+=dizi[i]
        adet++

    }


}
console.log(`${adet} sayinin toplami: ${toplam}`) */

/* for(let item of dizi ){
    if(item>0&&item%2==0){
        toplam+=item
        adet++
    }


}
console.log(`${adet} sayinin toplami: ${toplam}`) */

//forin index dondurur
//forof bize deger dondurur

/* 
for( let i in dizi){
    console.log(i)
}


for( let i of dizi){
    console.log(i)
} */

/* 
// 2- Ülke ve başkentlerin yazılı olduğu dizilerinde eşleşen
// indis elemanlarını birleştirerek ayrı bir diziye atın.
const ulkeler = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
    "Rusya",
  ];
  const baskentler = [
    "Ankara",
    "Berlin",
    "Paris",
    "Amsterdam",
    "Roma",
    "Madrid",
    "Lizbon",
  ];

  let newArr=[];

  for(let w in ulkeler  ){

    newArr[w]=ulkeler[w] + "-"+ baskentler[w]

  }
console.log(newArr)
 */

//3- Dizinin herbir elemanını ilk 3 karakterini büyük harfli
// olarak değiştirip alfabetik hale getirip yazdırın.

let ulkeler2 = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
    "Rusya",
  ];

/*   console.log(ulkeler2.sort()) */

let yeniDizi=[];
ulkeler2=ulkeler2.sort((a,b)=>a.localeCompare(b));


for(let item of ulkeler2){
    item=item.substring(0,3).toLocaleUpperCase()
    yeniDizi.push(item)

}

console.log(ulkeler2)
console.log(yeniDizi)


/* const newSort = new Intl.Collator('tr', { sensitivity: 'base' });
ulkeler2.sort(newSort.compare);
console.log(ulkeler2)



const points = [40, 100, 1, 5, 25, 10];

console.log(points.sort(function(a, b){return a - b}))
 */


