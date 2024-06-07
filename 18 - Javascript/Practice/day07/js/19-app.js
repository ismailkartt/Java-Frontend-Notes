// 4- Dizideki her bir elemanın 2 katının mutlak değerini alıp
// başka bir diziye atın.
// Yeni dizinin elemanları azalan şekilde sıralansın.

/* let dizi1 = [-5, 6, 3, -5, -7, 4, 12, -58, 72];

let newArr=[];

dizi1.forEach((item,index)=>{
    newArr[index]=Math.abs(item*2)

})


newArr.sort((a,b)=>b-a);
console.log(newArr)
 */

// 5- Dizideki elemanlardan uzunluğu belirtilen sayıya eşit olanaları
 //ayrı bir dizide saklayan uygulamayı yapın.

 const isimler = [
    "Ali",
    "Can",
    "Kemal",
    "Ahmet",
    "Oya",
    "Selim",
    "Mine",
    "Elif",
    "Bora",
    "Ayşe",
    "Abuziddin"
  ];

/*   const filtrele = (uzunluk) => { 
    let newArr=[];
    for(let item of isimler){
        if(item.length==uzunluk){
            newArr.push(item)

        }

    }
    return newArr


  }

  console.log(filtrele(

  )) */



/*   const filtrele = (uzunluk) => { 
    
  let yeniIsimler=isimler.filter((isim)=>isim.length==uzunluk)
  return yeniIsimler;

  }
  console.log(filtrele(5)) */


/* 
//!6- Dizideki sayıların ortalamasını bulun ortalamadan yüksek olanları
// başka bir diziye atarak yazdırın.

const notlar1 = [38, 62, 74, 28, 86, 67, 92, 100, 56, 94, 72];

let toplam=notlar1.reduce((acc,curr)=>acc+curr,0)
//console.log(toplam)
// let ortalama=Math.floor( toplam/ notlar1.length) ; 

let ortalama=( toplam/ notlar1.length)
console.log(ortalama)


 ortalama=( toplam/ notlar1.length).toFixed() ;
// console.log(ortalama) 

let ortalamaUstu=notlar1.filter((not)=>not>ortalama)
console.log(ortalamaUstu) */


//7- Dizideki notların ortalamasını bulun, ortalamadan yuksek olanların
// ortalamasını %20,
// düşük olanların ortalamasını %10 artırarak yeni diziye atalım.
const notlar = [
    { ad: "Ali Can", not: 38 },
    { ad: "Veli Kan", not: 62 },
    { ad: "Oya Tan", not: 74 },
    { ad: "Elif Han", not: 28 },
    { ad: "Mine San", not: 86 },
    { ad: "Mert Er", not: 67 },
    { ad: "Bora Fer", not: 92 },
    { ad: "Ayşe Yılmaz", not: 100,},
    { ad: "İlke Cansız", not: 56,},
    { ad: "Sude Canlı", not: 94 },
    { ad: "Bade Sert", not: 72,},
    ]; 

    let ort=notlar.reduce((x,y)=>x+y.not,0)
ort=(ort/notlar.length).toFixed(2)
console.log(ort)

const yeniNotlar=notlar.map(item=>{
   if(item.not>ort){
    item.not=(item.not*1.2).toFixed(2)

   }else{
    item.not=(item.not*1.1).toFixed(2)
   }
   if(item.not>100){
item.not=100
   }

   return item;

})

console.log(yeniNotlar)

