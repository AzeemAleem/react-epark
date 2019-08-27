import React, { Component } from "react";
import { Link } from "react-router-dom";
import { relative } from "path";

class Beaner extends Component {
    render() {
        return (
            <div>
                <div className="image">
                    <img className="beander-pic" src="./images/Beaner.jpg" alt="logo" />
                    <button style={{
                        backgroundColor: '#0AE037', color: 'white',
                        position: 'relative', top: '-200px', height: '40px',
                        width: '150px', left: '65px', border: 'none', fontSize: '18px', borderRadius: '3px'
                    }}>
                        <Link className="link" to="/Howitworks" style={{color: 'white'}}>How it works</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Beaner;