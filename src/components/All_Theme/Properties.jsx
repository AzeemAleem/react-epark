import React, { Component } from "react";
class Properties extends Component {
    render() {
        return (
            <div>
               <div className="mainbox">
                        
                        <div className="main-1">
                        <i class="fas fa-dollar-sign"></i>
                         <h3>Save Money</h3>
                            <p>Save up to 70% on our site compared to the cost of on-airport parking.</p>
                        </div>
                        <div className="main-2">
                        <i class="far fa-clock"></i>
                            <h3>Save Time</h3>
                            <p>Its easy to compare parking at all major airports. Booking a reservation is quick and simple!</p>
                            
                        </div>
                        <div className="main-3">
                        <i class="far fa-thumbs-up"></i>
                            <h3>Save Stress</h3>
                            <p>Guarantee your parking spot by booking in advance. Cant make it? Cancellations are free.</p>
                            
                        </div>
                    </div>
            </div>
        );
    }
}
export default Properties;
