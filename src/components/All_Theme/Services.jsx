import React, { Component } from "react";
class Services extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="s1">
                        <h3>Vehicle Secure</h3>
                        <p>Simply drive up and go with our E-Park service. Your vehicle is secured in our platform!</p>
                        <i class="fa fa-car"></i>
                    </div>
                    <div className="s2">
                        <h3>Close and Handy</h3>
                        <p>Park at the terminal – just a short walk and you are at your departure gate.</p>
                        <i class="fas fa-hands-helping"></i>
                        
                    </div>
                    <div className="s3">
                        <h3>Concierge Options</h3>
                        <p>Take advantage of our Concierge services and have us help you out.</p>
                        <i class="fas fa-key"></i>
                        
                    </div>
                    <div className="s4">
                        <h3>Safe and Secure</h3>
                        <p>24 hour surveillance to ensure your car is safe and secure while you are away</p>
                        <i class="fas fa-user-shield"></i>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Services;