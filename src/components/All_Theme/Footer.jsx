import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-area section-space">
                    <div className="container">
                        <div className="footer-logo">
                            <a href="#"><img src="./images/Logo of E-park-01.png" className="img-responsive" alt="logo" /></a>
                        </div>
                        <p>© 2019 All Rights Reserved. Designed by <a href="/">
                            Azeem Aleem, Irfan Asgher, Sajawal Imran</a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;