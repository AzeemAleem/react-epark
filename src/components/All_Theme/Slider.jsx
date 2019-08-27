import React, { Component } from "react";
class Slider extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2>What Our Customer Says!</h2>
                    <section className="customer-logos slider">
                        <div className="slide"><img src="./images/r1.png" /></div>
                        <div className="slide"><img src="./images/r3-01.png" /></div>
                        <div className="slide"><img src="./images/r4-01.png" /></div>
                        <div className="slide"><img src="./images/r5-01.png" /></div>
                        <div className="slide"><img src="./images/r1.png" /></div>
                        <div className="slide"><img src="./images/r1-01.png" /></div>
                        <div className="slide"><img src="./images/r3-01.png" /></div>
                        <div className="slide"><img src="./images/r4-01.png" /></div>
                        <div className="slide"><img src="./images/r5-01.png" /></div>
                    </section>
                </div>
            </div>
        );
    }
}
export default Slider;