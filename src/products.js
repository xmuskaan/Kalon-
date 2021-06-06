import productsData from "./productsData";

const products = () => {
    return ( <div className="mainDiv">

        <div className="products">
            <div className="imgContaniner">
                <img src="{this.Image}" />
            </div>

            <h4>{this.Name}</h4>
            <button className="priceButton"> {this.Price}</button>
        </div>


    </div>
      
)}
export default products;