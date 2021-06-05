const ContactPage = () => {
    return ( 
     <div className="contactbg">
        <div className="contact">
            <h3>Let's Talk</h3>
            <form className="contactForm">
                <input className="textLabel" label="Name" type="text" placeholder="Your Name" />
                <input className="textLabel" label="Email" type="email" placeholder="Your Email" />
                <textarea className="textArea" placeholder="Your message.."></textarea>
                <br/>
                <div className="response">        
                    <input label="copyresponse" type="checkbox" />
                    <label  for="response">Send a copy of responses.</label>
                    <button className="buttonSmall">Send message</button>
                </div>
            </form>
            
            <div className="call">
                <div className="leftLine">
                    <hr className="lineDivide" />
                </div>

                <div className="textLine">
                    <span>OR CALL US </span>
                </div>
                
                <div className="rightLine">
                    <hr className="lineDivide" />
                </div>
            </div>

            <h4> +91 23454 13254</h4>
        </div>
    </div>    
);
}
 
export default ContactPage;