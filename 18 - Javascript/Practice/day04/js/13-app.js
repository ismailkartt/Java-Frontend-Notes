//Girilen iki sayı arasındaki 4'e bölünüp 8'e bölünmeyen sayıların
// toplamını ve adedini mesaj
// olarak yazdırın
let sayi1El = document.getElementById("sayi1");
let sayi2El = document.getElementById("sayi2");
let mesaj = document.getElementById("msg");

document.getElementById("btn").addEventListener("click", () => {
  hesapYap();
});

const hesapYap = () => {
  let sayi1 = Number(sayi1El.value);
  let sayi2 = Number(sayi2El.value);

  if (sayi1 > sayi2) {
    let temp = sayi1;
    sayi1 = sayi2;
    sayi2 = temp;
  }

  let toplam = 0;
  let adet = 0;

  for (let i = sayi1; i <= sayi2; i++) {
    if (i % 4 == 0 && i % 8 != 0) {
      toplam += i;
      adet++;
    }
  }
  mesaj.innerHTML = `Sayilarin adeti: ${adet} toplami: ${toplam}`;
};
