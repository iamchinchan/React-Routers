import { useParams } from "react-router-dom";
const ProductDetails=(props)=>{
    const params = useParams();
    console.log("productId is: ",params.productId);
    return(
        <section>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
        </section>

    );
}
export default ProductDetails;