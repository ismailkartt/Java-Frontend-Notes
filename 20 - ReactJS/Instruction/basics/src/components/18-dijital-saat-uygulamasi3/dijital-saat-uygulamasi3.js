import "./dijital-saat-uygulamasi3.scss";
import moment from "moment";
import "moment/locale/tr";
import { useEffect, useState } from "react";

let message = "";

const DijitalSaatUygulamasi3 = (props) => {
    const [trTarih, setTrTarih] = useState(moment().locale("tr"));

    const tarih = trTarih.format("DD MMMM YYYY");
    const haftaninGunu = trTarih.format("dddd");
    const saat = trTarih.format("HH");
    const dakika = trTarih.format("mm");
    const saniye = trTarih.format("ss");

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

    useEffect(() => {
        const timer = setInterval(() => {
            setTrTarih(moment().locale("tr"));
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])
 
    return (
        <div style={clockStyle} className="dijital-saat-uygulamasi3 my-5">
            <div className="time">
                {saat}
                <span style={{
                    // color: saniye % 2 === 0 ? "white" : "transparent",
                    // visibility: saniye % 2 === 0 ? "hidden" : "visible"
                    opacity: saniye % 2 === 0 ? 0 : 1
                }}>:</span>
                {dakika}</div>
            <div>
                <div className="date">{tarih}</div>
                <div className="day">{haftaninGunu}, {message}</div>
            </div>
        </div>
    )
}

export default DijitalSaatUygulamasi3;