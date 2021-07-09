import {Link} from 'react-router-dom';
import msx from '../Images/msx.jpg';
import callum from "../Images/callum.jpg"




const AboutPage = () => {
    return (  
    <div className="mainDiv"> 
        <div className="aboutInfo">
               <div className="aboutHead">
                <h3>About Us</h3> 
            </div>

            <div className="abImage">
                <img src={msx} alt="Kirti"/>
                <span className="kirtiText">Kirti Saini</span>
            </div>

            <div className="aboutText">
            <span>Kirti Saini founded Kalon after leaving her long-time career in finance to create accessible, timeless jewelry that modern women can buy for themselves, on their own terms.</span>         
            </div>
        </div>
        
        <div className="abConnect">
            <div className="connectContainer">
                <h3 className="connectHead">Get in touch with us now!</h3>
                <Link to="/contactus"><button className="contactButton">Contact Now</button></Link> 
                
                <div className="abFeatures">
                    <span className="feature"><i className="far fa-check-circle"/>Fully handmade products</span>
                    <span className="feature"><i className="far fa-check-circle"/>Clean, Minimal & Modern Design</span>
                    <span className="feature"><i className="far fa-check-circle"/>Sustainable and eco-friendly!</span>
                </div>
            </div>

        </div>

        <div className="reviews">
            <h3 className="revHead"> Reviews from people who've brought our products</h3>
            <div className="revBody">
                <img className="revImage" src={callum} alt="maybe"/>
                <span className="revText">Your customer service is outstanding, your packaging is beautiful and the products I have received so far are wonderful - great quality!  Your catalog is fabulous.  I usually hate getting catalogs but yours will be staying with me and used often - it's pretty enough to leave on my coffee table!  But what I find most appealing is that your prices are better than most other options out there on almost every product!</span> 
            </div>
        </div>
    </div>
    );
}
 
export default AboutPage;