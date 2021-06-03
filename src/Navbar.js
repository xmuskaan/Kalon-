 import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
    <nav className="NavBar">
        <div className="container">
            <div className="navCon">
                <h3 className="Title"> Kalon </h3>
                <div className="NavList">
                    <span className="Home"><Link to="/">Home</Link></span>
                    <span className="AboutUs"><Link to="/about">About Us</Link></span>
                    <span className="Products"><Link to="/products">Products</Link></span>
                    <span className="ContactUs"><Link to="/contactus">Contact Us</Link></span>
                </div>
            </div>
        </div>
    </nav>
);
}
 
export default Navbar;