import kopukImage from "../../assets/img/kopuk.jpg"

const Image = () => {
    return (
        <div>
            <h2>STATIK GORUNTU</h2>
            <img src="./img/image1.jpg" alt="northern lights" />

            <h2>HARICI GORUNTU</h2>
            <img src="https://fastly.picsum.photos/id/947/536/354.jpg?hmac=SWrzGjeEE8tsTHphNhl2ma3QToFb3nDd5hLIbtWX69s" alt="" />


            <h2>IMPORT YONTEMIYLE</h2>
            <img src={kopukImage} alt="" />


            <h2>REQUIRE YONTEMIYLE</h2>
            <img src={require("../../assets/img/kopuk.jpg")} alt="" />
        </div>
    )
};

export default Image;