import Showcaseimg from './Showcaseimg.png'

const Showcase = () => {
    return (
    <div className="Showcase">
        <div className="container">
            <div className="heroContent">
                <div className="box1">
                    <h2>You have the design you have the code</h2>
                    <h4 className="smallText">We made it so beautiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection!</h4> <br/> 
                    <button className="buttonSmall"> <a href="products.html">EXPLORE</a></button>   
                </div>
                <div className="box2"> 
                    <div className="imageShowcase">
                        <img src={Showcaseimg} alt="Showcase" />
                    </div>         
                </div>
            </div> 
        </div>
    </div>
);
}
 
export default Showcase;