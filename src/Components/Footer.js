import "../App.css";
import { Link } from "react-router-dom";
function Footer()
{
    return(
        <div className="Footer"><br/>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <h2 className="Footerheading">Restaurant</h2>
                            <Link to="/" className="footercon"><p>Home</p></Link>
                            <Link to="/About" className="footercon"><p>About Us</p></Link>
                            <Link to="/Menu" className="footercon"><p>Menu</p></Link>
                            <Link to="/Gallery" className="footercon"><p>Gallery</p></Link>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <h2 className="Footerheading">Discover</h2>
                            <p>Table Booking</p>
                            <p>Dining</p>
                            <p>Event Venues</p>
                            <p>Party Area</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <h2 className="Footerheading">Opening Time</h2>
                            <p>Monday 12:00pm - 10:30pm</p>
                            <p>Tuesday 12:00pm - 10:30pm</p>
                            <p>Wednesday 12:00pm - 10:30pm</p>
                            <p>Thursday 12:00pm - 10:30pm</p>
                            <p>Friday 12:00pm - 10:30pm</p>
                            <p>Saturday 12:00pm - 11:30pm</p>
                            <p>Sunday 12:00pm - 11:30pm</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"><br/>
                            <img src="https://i.pinimg.com/564x/9c/f9/cc/9cf9cccb9a5b15e46b75afc49aecf287.jpg" width="100%"/>
                            <img src="https://i.pinimg.com/564x/21/de/91/21de91c2d0b0a31174d2b1318e667499.jpg" width="100%"/>
                        </div>
                    </div>
                </div><br/>


                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h3 className="Footerheading">SubScribe For Latest Updates</h3>
                            <input type="text" placeholder="Enter Your Email Address" className="Footersub"/>&nbsp;&nbsp;
                            <button type="submit" className="Footersub">SUBSCRIBE</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h3 className="Footerheading">Connect With Us</h3>   
                            <img src="https://i.pinimg.com/564x/db/19/33/db19332a23a44f772c5a1855a8aabf70.jpg" width="8%" className="Footerimg"/>&nbsp;&nbsp;
                            <img src="https://i.pinimg.com/564x/7f/13/40/7f134062d200cd4724d755ca35bb260a.jpg" width="8%" className="Footerimg"/>&nbsp;&nbsp;
                            <img src="https://i.pinimg.com/564x/a8/cb/44/a8cb44d692c8d38df145ce9d757cef13.jpg" width="8%" className="Footerimg"/>&nbsp;&nbsp;
                            <img src="https://i.pinimg.com/564x/cc/31/6f/cc316f97197528e5e26e613a93ab16a4.jpg" width="8%" className="Footerimg"/>&nbsp;&nbsp;
                            <img src="https://i.pinimg.com/564x/7f/45/88/7f4588efc18882b586ae69092c7bafd6.jpg" width="8%" className="Footerimg"/><br/><br/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;