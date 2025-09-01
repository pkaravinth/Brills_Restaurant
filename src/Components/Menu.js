import img1 from "../images/Yellow Restaurant Menu.jpg";
import img2 from "../images/2.jpg";
function Menu()
{
    return(
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="two">Our Specials</h1>
                    </div>
                </div>
            </div><br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                       <img src="https://i.pinimg.com/564x/ce/e7/af/cee7afefa9509527a398ad7171a46545.jpg" className="specials" data-aos="zoom-in-right" data-aos-duration="1000"/>
                       <h3 className="specialcontent">Chicken Biriyani</h3>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                       <img src="https://i.pinimg.com/564x/aa/b0/12/aab012cc3dcfe370d79b017ded4168ff.jpg" className="specials" data-aos="zoom-in-right" data-aos-duration="1000"/>
                       <h3 className="specialcontent">Grill Chicken</h3>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                       <img src="https://i.pinimg.com/564x/7b/a2/ab/7ba2ab60222621fb3dc052cd5d485231.jpg" className="specials" data-aos="zoom-in-left" data-aos-duration="1000"/>
                       <h3 className="specialcontent">Prawn 65</h3>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                       <img src="https://i.pinimg.com/564x/8a/54/2f/8a542fa97c01d433d34d1fcb8c68ad1c.jpg" className="specials" data-aos="zoom-in-left" data-aos-duration="1000"/>
                       <h3 className="specialcontent">Fish Fry</h3>
                    </div>
                </div>
            </div><br/><br/>


            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                       <img src="https://i.pinimg.com/564x/0d/11/07/0d1107398ea6d5c5cca32cc841c78504.jpg" className="specials" data-aos="zoom-in-right" data-aos-duration="1000"/>
                       <h3 className="specialcontent">Paneer Butter Masala</h3>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                       <img src="https://i.pinimg.com/564x/98/8c/14/988c14d330598ec327e16424a37c36d3.jpg" className="specials" data-aos="zoom-in-right" data-aos-duration="1000"/>
                       <h3 className="specialcontent">Egg Masala</h3>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                       <img src="https://i.pinimg.com/564x/c3/01/f6/c301f69985ffa7d5480cfdfa4f17538c.jpg" className="specials" data-aos="zoom-in-left" data-aos-duration="1000"/>
                       <h3 className="specialcontent">Ghee Roast</h3>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                       <img src="https://i.pinimg.com/564x/b3/ce/28/b3ce28454c2c5e884035a65a88709772.jpg" className="specials" data-aos="zoom-in-left" data-aos-duration="1000"/>
                       <h3 className="specialcontent">Tandoori</h3>
                    </div>
                </div>
            </div><br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 button">
                       <h1 className="menu two">Menu</h1>
                    </div>
                </div>            
           </div>


           <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <h1 className="two">Lunch</h1>
                        <img src={img1} width="100%" data-aos="flip-right" data-aos-duration="1000" className="specials"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <h1 className="two">DINNER</h1>
                       <img src={img2} width="100%" data-aos="flip-left" data-aos-duration="1000" className="specials"/>
                    </div>
                </div>            
           </div><br/><br/>
           

           <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="two">We Offer You an Unforgettable Dinning Experience</h1><br/>
                    </div>
                </div>
            </div><hr/>

        </div>
        
    )
}
export default Menu;