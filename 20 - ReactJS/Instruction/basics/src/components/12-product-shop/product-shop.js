import ProductFooter from "./product-footer/product-footer"
import ProductHeader from "./product-header/product-header"
import ProductList from "./product-list/product-list";

const ProductShop = () => {
    return (
        <div className="product-shop-container my-5">
            <ProductHeader />
            <ProductList />
            <ProductFooter />
        </div>
    )
}

export default ProductShop