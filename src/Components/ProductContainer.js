const ProductContainer = (props) => {
    return ( 
    <div className="product earrings">
        <div className="imgContainer">
            <img className="image " src={props.img} alt="meaningful text"/>.
            
        </div>
       
        <h4>{props.name}</h4>
        <button className="priceButton">{props.prc}</button>                    
    </div>
     );
}
 
export default ProductContainer;
