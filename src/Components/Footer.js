import {Link} from 'react-router-dom';


const Footer = () => {
    return ( 
    
    <footer className="footer">  
        <div className="footer1">
            <div className="sub1">
                <Link to="" className="aboutFooter">About</Link>
                <Link to="" className="privacy" >Privacy Policy</Link>
                <Link to =""className="Terms" >Terms</Link>
            </div>
            
            <div className="sub2">
                <Link to ="" className="contacts" >Contacts</Link>
                <Link to ="" className="fbIcon" ><i className='fab fa-facebook'></i></Link>
                <Link to ="" className="igIcon" ><i className='fab fa-instagram'></i></Link>
            </div>
        </div>
        
        <div className="footer2">
            <div className="smallText">
            Be sure to take a look at our Terms of Use and Privacy Policy
            </div>
            
            <Link to ="www.linkedin.com/in/muskaanranga" className="devInfo"> Musk &copy; 2021</Link> 
        </div>  
    </footer>    
);
}
 
export default Footer;