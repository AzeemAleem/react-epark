import React, { Component } from 'react'
import './Howitworks.css';

class Howitworks extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron text-center">
  <h1>How it works</h1>
  <p>We make our interface too much userfreidly </p> 
</div>
  
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 style={{fontWeight:'bold',fontFamily:'Arial'}}>1.Select Your Area</h3>
      <p>Check the availabilty of car parking slots</p>
      <p>If seats are availabe then you can move one step forward. We provide active services to our Customers.</p>
    </div>
    <div class="col-sm-4">
      <h3 style={{fontWeight:'bold',fontFamily:'Arial'}}>2.Select Date</h3>
      <p>Select the Date which day you want to reserve your slot for your ride park. After then click the Reserve Button Now</p>
      <p>Your Slot will be reserve only for this specific date, otherwise it will be cancel and availabe for another person</p>
    </div>
    <div class="col-sm-4">
      <h3 style={{fontWeight:'bold',fontFamily:'Arial'}}>3.Sign Up/ Login</h3>        
      <p>Before reservation of seat you must be sign up, if you are new user. Otherwise your login account must be active.</p>
      <p>If you want to use our site more than one time, you dont need to signup again, your login account will be active.</p>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default Howitworks;