import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="preview-banner-area" style={{ backgroundImage: 'url(./images/bg-car_image.jpg)' }}>
                    <div className="container">
                        <div className="preview-banner-content">
                            <div className="preview-logo-area">
                                <img className="img-responsive" src="./images/Logo of E-park-01.png" alt="logo" />
                            </div>
                            <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '20px', width: '850px', margin: 'auto' }} className="c1">
                                <h3 style={{ color: 'white', opacity: '1', zIndex: '1' }}>We Have the best Deals For Parking Slots</h3>
                            </div><br/><br/>
                            <ul>
                                
                                <div style={{ backgroundColor: '#0AE037', height: '30px', width: '150px', margin: 'auto', borderRadius: '3px' }}>
                                    <li style={{ color: 'white', fontSize: '20px', margin: 'auto' }} >
                                        <Link className="link" to="/body" style={{ color: 'white' }}>Book Now</Link>
                                    </li>
                                </div>
                            </ul>
                            <div id="mybutton" className="derection-for-bottom"><span className="blink-item"><i className="fa fa-angle-double-down" aria-hidden="true" style={{ color: '#0AE037', position: 'absolute', top: '350px', margin: 'auto' }}></i></span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
