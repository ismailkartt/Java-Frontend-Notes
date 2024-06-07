import "./02-image-gallery.scss";
import imagesData from "../../assets/data/images.json";

const ImageGallery = () => {
    return (
        <>
            <h1>IMAGE GALLERY</h1>
            <div className="image-gallery-container">

                {
                    imagesData.map((image) => (
                        <div key={image.name}>
                            <img
                                src={require(`../../assets/img/${image.name}`)}
                                alt={image.title}
                                title={image.title}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ImageGallery