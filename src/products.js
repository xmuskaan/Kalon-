import productsData from "./productsData";
import ProductContainer from "./ProductContainer";
import Filter from "./Filter";

const products = () => {

    function handleChange(e) {
        productsData.map(products =>{ 
        if (e.target.value=== 'earrings'){
            console.log(productsData.includes('Earrings'));} })
        }
    
    return ( 
    <div className="mainDiv">
        <div className="products">
            <div className="proText">
                <h3>New Shades for Summer</h3>
                <p>The innovative detail of the original shoe was the "loose lining" of soft canvas that was intended to provide flexibility and prevent blisters.</p>
            </div>
            <div className="filterProducts">
                <select className="filter" onChange={handleChange}name="productstype" >
                    <option value="all">All</option>
                    <option value="earrings" >Earrings</option>
                    <option value="pendants" >Pendants</option>
                    <option value="rings" >Rings</option>
                </select>
                {/* <select class="filter" onchange="filterSelection(this.value)" name="color">
                    <option value="all">All</option>
                    <option value="blue">Blue</option>
                    <option value="red" >Red</option>
                    <option value="pink" >Pink</option>
                    <option value="purple">Purple</option>
                </select>
                
                
                <select class="filter" onchange="filterSelection(this.value)" name="sortBy">
                    <option value="all">All</option>
                    <option value="new">New</option>
                    <option value="popular">Popular</option>
                    <option value="pricelh">Price:Low to High</option>
                    <option value="pricehl" >Price:High to Low</option>
                    <option value="discount" >Discount</option>
                </select> */}
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
export default products;