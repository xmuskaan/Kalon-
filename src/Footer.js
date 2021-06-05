import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
    
    <footer className="footer">  
        <div className="footer1">
            <div className="sub1">
                <Link to=""className="aboutFooter">About</Link>
                <a className="privacy" href="#">Privacy Policy</a>
                <a className="Terms" href="#">Terms</a>
            </div>
            
            <div className="sub2">
                <a className="contacts" href="#">Contacts</a>
                <a className="fbIcon" href="#"><i className='fab fa-facebook'></i></a>
                <a className="igIcon" href="#"><i className='fab fa-instagram'></i></a>
            </div>
        </div>
        
        <div className="footer2">
            <div className="smallText">
            Be sure to take a look at our Terms of Use and Privacy Policy
            </div>
            
            <a className="devInfo" href="">Musk &copy; 2021</a> 
        </div>  
    </footer>    
);
}
 
export default Footer;