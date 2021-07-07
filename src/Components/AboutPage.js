import {Link} from 'react-router-dom';




const AboutPage = () => {
    return (  
    <div className="mainDiv"> 
        <div className="aboutInfo">
               <div className="aboutHead">
                <h3>About Us</h3> 
            </div>

            <div className="abImage">
                <img src="" alt="Kirti"/>
                <span className="kirtiText">Kirti Surname</span>
            </div>

            <div className="aboutText">
            <span>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</span>         
            </div>
        </div>
        
        <div className="abConnect">
            <div className="connectContainer">
                <h3 className="connectHead">Get in touch with us now!</h3>
                <Link to="/contactus"><button className="contactButton">Contact Now</button></Link> 
                
                <div className="abFeatures">
                    <span className="feature">Fully handmade products</span>
                    <span className="feature">Clean, Minimal & Modern Design</span>
                    <span className="feature">Sustainable and eco-friendly!</span>
                </div>
            </div>

        </div>

        <div className="reviews">
            <h3 className="revHead"> Reviews from people who've brought our products</h3>
            <div className="revBody">
                <img className="revImage" src="" alt="maybe"/>
                <span className="revText">We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</span> 
            </div>
        </div>
    </div>
    );
}
 
export default AboutPage;