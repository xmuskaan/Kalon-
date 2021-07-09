import Showcaseimg from '../Images/Showcaseimg.png';
import pinkgem from '../Images/pinkgem.jpg';
import Moonear from '../Images/Moonear.jpg';
import heartear from '../Images/heartear.jpg';
import {Link} from 'react-router-dom';



const HomePage = () => {
return (
  <div className="mainDiv">
    <div className="Showcase">
        <div className="container">
            <div className="heroContent">
                <div className="box1">
                    <h2>Homemade Jewellery just for you</h2>
                    <h4 className="smallText">We made this jewellery so beautiful and simple.You definitely want to add this to your collection!</h4> <br/> 
                    <Link to = "/products"><button className="buttonSmall">EXPLORE</button> </Link>  
                </div>
                <div className="box2"> 
                    <div className="imageShowcase">
                        <img src={Showcaseimg} alt="Showcase" />
                    </div>         
                </div>
            </div> 
        </div>
      </div>
    
    <div className="Featured"> 
      <div className="featuredCon">
        <div className="featuredHead">
            <h2>Best Selling Products</h2>  
           <span className="smallText">Presenting you our best featured products that our customers love!</span>
        </div>    
        
        <div className="featProduct">
            <div> 
                <img src={pinkgem} alt="pink gem"/>
                <span className="imageText">Pink Gem Earrings</span>
            </div>

            <div> 
            <img src= {Moonear} alt ="Moon earrings"/>
            <span className="imageText">Moon Earrings</span>
            </div>
                    
            <div> 
            <img src={heartear} alt="heart earrings" />
            <span className="imageText">Heart Earrings</span>
            </div>
        </div>

        <Link to = "/products"><button className="viewMore">View More</button></Link>

            <div className="featBottom">    
                <h3>Be the first one to know about our latest releases!</h3>
                <input className="emailInfo" type="email" placeholder="Your Email Address" />
                <button className="send">Send</button>
            </div>    
      </div>
    </div>
  </div>
);
}
 
export default HomePage;

