import productsData  from "./productsData";
import ProductContainer from "./ProductContainer";

const Products = () => {
   
    return ( 
    <div className="mainDiv">
        <div className="products">
            <div className="proText">
                <h3>New Shades for Summer</h3>
                <p>The innovative detail of the original shoe was the "loose lining" of soft canvas that was intended to provide flexibility and prevent blisters.</p>
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
