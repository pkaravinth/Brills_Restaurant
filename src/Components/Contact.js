function Contact()
{
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><br></br><br></br><br></br><br></br>
                        <h1 className="Inputcontact"><b>Contact Form</b></h1>
                        <form>
                            <h4>Name *</h4>
                            <input type="text" placeholder="First Name" style={{width:"48.9%"}} className="Input"/>&nbsp;&nbsp;&nbsp;
                            <input type="text" placeholder="Last Name" style={{width:"48.9%"}} className="Input"/><br/><br/>
                            <h4>Email *</h4>
                            <input type="Email" placeholder="Enter Your Email" style={{width:"100%"}} className="Input"/><br/><br/>
                            <h4>Your Message *</h4>
                            <textarea rows="7" style={{width:"100%"}} className="Inputtext"></textarea>
                            <button className="Contactbtn">Submit</button>
                        </form>
                    </div>


                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 Inputphoto">
                        <img src="https://i.pinimg.com/564x/5c/b2/45/5cb245cd5ddbeb0b330fd0167598b49b.jpg" style={{width:"100%"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;