import productsData  from "../productsData";
import ProductContainer from "./ProductContainer";


const Products = () => {
   
    return ( 
    <div className="mainDiv">
        <div className="products">
            <div className="proText">
                <h3>New Shades for every Season!</h3>
                <p>We release new products for you every season so that you can go with the trend!</p>
            </div>
         
            <div className="productsList">
                { productsData.map(product => (
                       <ProductContainer productData={productsData} name={product.Name} img={product.image} prc={product.Price} key={product.id}
                       Type={product.Ftype}/>
                    ))
                }
            </div>
        </div>
        <script src="Filter.js"></script>
    </div>
)}
export default Products;
