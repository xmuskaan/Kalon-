import pinkgem from './pinkgem.jpg';
import Moonear from './Moonear.jpg';
import heartear from './heartear.jpg';
import {Link} from 'react-router-dom';
 
const Featured = () => {
    return ( <div className="Featured"> 
    <div className="featuredCon">
        <div className="featuredHead">
            <h2>Best Selling Products</h2>  
           <span className="smallText">Advantages include excellent sound quality, and the fact that they do not require any batteries. Gamers often prefer wired headphones so they never have to worry about batteries dying in the middle of a heated match.</span>
        </div>    
        
        <div className="featProduct">
            <div> 
                <img src={pinkgem} alt="pink gem"/>
                <span className="imageText">Some Text</span>
            </div>

            <div> 
            <img src= {Moonear} alt ="Moon earrings"/>
            <span className="imageText">Some Text</span>
            </div>
                    
            <div> 
            <img src={heartear} alt="heart earrings" />
            <span className="imageText">Some Text</span>
            </div>
        </div>

        <Link to = "/products"><button className="viewMore">View More</button></Link>

            <div className="featBottom">    
                <h3>Be the first one to know about our latest releases!</h3>
                <input className="emailInfo" type="email" placeholder="Your Email Address" />
                <button className="send">Send</button>
            </div>    
    </div>
</div> );
}
 
export default Featured;