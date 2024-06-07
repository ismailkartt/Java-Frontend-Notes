import "./04-dijital-saat-uygulamasi1.scss";

const DijitalSaatUygulamasi1 = () => {
    const tarih = new Date();
    const gun = tarih.getDate();
    const saat = tarih.getHours();
    const dakika = tarih.getMinutes();
    const ay = tarih.getMonth();
    const ayArrayleri = ["Ocak", "Subat", "Mart", "Nisan", "Mayis", "Haziran", "Temmuz", "Agustos", "Eylul", "Ekim", "Kasim", "Aralik"];
    const yil = tarih.getFullYear();
    const gunler = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];

    return (
        <div className="dijital-saat-uygulamasi1">
            <div className="time">{saat}:{dakika}</div>
            <div>
                <div className="date">{gun} {ayArrayleri[ay]} {yil}</div>
                <div className="day">{gunler[tarih.getDay()]}, AKSAM</div>
            </div>
        </div>
    )
}

export default DijitalSaatUygulamasi1;