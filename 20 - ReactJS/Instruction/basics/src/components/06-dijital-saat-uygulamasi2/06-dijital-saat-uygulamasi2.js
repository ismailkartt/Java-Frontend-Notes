import "./06-dijital-saat-uygulamasi2.scss";
import moment from "moment";
import "moment/locale/tr";

const DijitalSaatUygulamasi2 = (props) => {
    const trTarih = moment().locale("tr");
    const tarih = trTarih.format("DD MMMM YYYY");
    const haftaninGunu = trTarih.format("dddd");
    const saat = trTarih.format("HH");
    const dakika = trTarih.format("mm");

    let message = ""

    if (saat >= 6 && saat < 12) {
        message = "GUNAYDIN"
    } else if (saat >= 12 && saat < 18) {
        message = "TUNAYDIN"
    } else if (saat >= 18 && saat < 22) {
        message = "IYI AKSAMLAR"
    } else {
        message = "IYI GECELER"
    }


    const clockStyle = {
        color: props.color,
        backgroundColor: props.backgroundColor
    }

    return (
        <div style={clockStyle} className="dijital-saat-uygulamasi2">
            <div className="time">{saat}:{dakika}</div>
            <div>
                <div className="date">{tarih}</div>
                <div className="day">{haftaninGunu}, {message}</div>
            </div>
        </div>
    )
}

export default DijitalSaatUygulamasi2;