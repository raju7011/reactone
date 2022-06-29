import React from "react";
import Footer from "./Footer"

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center contacttext">
                    Contact me
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto contactme">
                        <img src={require('./images/cont.png')} alt="contact me"/>
                    </div>
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Full name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your  full name"/>
                            </div>
                            <div className="form-group mt-4">
                                <label for="exampleInputEmail1">Your Phone number</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number"/>
                            </div>
                            <div className="form-group mt-4">
                                <label for="exampleInputPassword1">Your Message</label>
                                <textarea type="password" class="form-control" rows ="5" id="exampleInputPassword1" col-8 placeholder="Type your message here"></textarea>
                            </div>
                            <button type="submit" className="btn mt-4 mb-5 btn-get-started">send message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;