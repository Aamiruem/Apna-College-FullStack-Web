
import "./Product.css";

function Product( title, price = 1 ) {
    
    return (
        <div className="Product">
            <h1>{title}</h1>
            <h5>{price}</h5>
            <h1>Product</h1>
            <p>Product Description</p>
        </div>
    );
}

export default Product;
