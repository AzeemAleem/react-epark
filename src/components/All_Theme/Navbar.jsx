import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="logo">
                    <img className="logo" src="./images/black logo of epark-01.png" alt="build-with" width="225px" height="30px" />
                    {/* <img className="logo" src="./images/Logo of E-park-01.png" alt="build-with" width="225px" height="30px" /> */}
                </div>

                <div className="nav-right">
                    <ul className="nav">
                        <li className="nav-items">
                            <Link className="link" to="/">Home</Link>
                        </li>
                      
                        <li className="nav-items">
                            <Link className="link" to="/contactus">Contact Us</Link>
                        </li>

                        <li className="nav-items">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="nav-items">
                            <Link className="link" to="/sign_up1">Sign Up</Link>
                        </li>
                        <li className="nav-items">
                        <Link className="link" to="/Howitworks">Help</Link>
                        </li>

                        {/* <li className="nav-items">
                            <Link className="link" to="/dashboard">Admin Login</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;
