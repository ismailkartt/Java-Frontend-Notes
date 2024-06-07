
const setPrice = () => {
    const fiyat = prompt("Please enter the price");
    const toplamFiyat = getPrice(fiyat, 20, 10);
    if (toplamFiyat) {
        alert(`Toplam fiyat: ${toplamFiyat}`);
    }
};

const getPrice = (urunFiyati, kdv, indirimOrani) => {
    if (!urunFiyati || isNaN(urunFiyati) || urunFiyati < 0) return;

    if (!indirimOrani || isNaN(indirimOrani)) indirimOrani = 0;

    if (!kdv || isNaN(kdv)) kdv = 0;

    if (urunFiyati > 1500) indirimOrani += 10;
    if (indirimOrani <= 0) kdv = 0;

    const kdvTutari = urunFiyati * kdv / 100;
    const indirimTutari = urunFiyati * indirimOrani / 100;
    const toplamFiyat = urunFiyati - indirimTutari + kdvTutari;

    return toplamFiyat;
};

