import React, { Component } from 'react';

import Header from './Header';
import Beaner from './Beaner';
import Body from './Body';
import Properties from './Properties';
import Footer from './Footer';
import Services from './Services';
import Slider from './Slider';



export default class All_Theme extends Component {
    render() {
        return (
            <div>
                < Header />
                < Body />
                <Beaner/>
                <Properties/>
                <Services/>
                <Slider/>
              
                <Footer />
            </div>
        )
    }
}
