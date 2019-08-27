import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contactus extends Component {
    render() {
        return (
           <div>

<div className="jumbotron jumbotron-sm">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-lg-12">
                <h1 className="h1">
                    Contact us <small>Feel free to contact us</small></h1>
            </div>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-md-8">
            <div className="well well-sm">
                <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="name">
                                Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                        </div>
                        <div className="form-group">
                            <label for="email">
                                Email Address</label>
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                        </div>
                        <div className="form-group">
                            <label for="subject">
                                Subject</label>
                            <select id="subject" name="subject" className="form-control" required="required">
                                <option value="na" selected="">Choose One:</option>
                                <option value="service">Technical Support</option>
                                <option value="suggestions">Report an issue</option>
                                <option value="product">Get Information</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="name">
                                Message</label>
                            <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                            Send Message</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        <div className="col-md-4">
            <form>
            <legend><span className="glyphicon glyphicon-globe"></span> Our office</legend>
            <address>
                <strong>Company Address</strong><br/>
                Al-Makkah Society 650<br/>
                Home, Block C, Butt Chock<br/>
                <abbr title="Phone">
                    P:</abbr>
                (0315) 865-2626
            </address>
            <address>
                <strong>Email ID</strong><br/>
                <a href="mailto:#">azeem.attari41@gmail.com</a>
            </address>
            <br/>
            </form>
            <br/>
        </div>
        <br/>
    </div>
</div>
           </div>
        );
    }
}
export default Contactus;
