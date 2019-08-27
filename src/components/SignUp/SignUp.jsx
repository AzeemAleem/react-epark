import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SignUp.css';
import axios from "axios";
export default class SignUp extends Component {
    onHandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    passwordmatch = (e) => {
        this.state.password
    }
    onHandleSubmit = (e) => {
        const userdetail = {
            password: this.state.password,
            username: this.state.username,
            phoneNumber: this.state.phoneNumber
        }
        alert(123)
        axios.post("/users", userdetail).then(resp => { console.log(resp) }).catch(e => console.log(e));

        this.props.history.push("/");
        var firstpassword=document.f1.password.value;
        var secondpassword=document.f1.password1.value;
        
        if(firstpassword==secondpassword){
        return true;
        }
        else{
        alert("password must be same!");
        return false;
        }
        
        
    }
    //  matchpass=()=>{
    //     var firstpassword=document.f1.password.value;
    //     var secondpassword=document.f1.password1.value;
        
    //     if(firstpassword==secondpassword){
    //     return true;
    //     }
    //     else{
    //     alert("password must be same!");
    //     return false;
    //     }
    //     }
    render() {
        console.log('state in signup', this.state)
        return (
            <div>

                <div className=" register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="./images/signup.png" alt="" style={{ height: "160px" }} />
                            <h3>Welcome</h3>
                            <Link className="link" to="/login">
                                <input type="submit" name="" value="Login" required/><br />
                            </Link>
                        </div>
                        <div className="col-md-9 register-right">

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 className="register-heading">Apply as a User</h3>
                                    <div className="row register-form" name="f1">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="username" onChange={this.onHandleChange} className="form-control" placeholder="Your Name *" pattern="[A-Za-z]{3}"  required/>
                                            </div>
                                            <div className="form-group">
                                                <input onChange={this.onHandleChange} name="phoneNumber" type="text" className="form-control" placeholder="Phone Number *" required/>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input minlength="8" maxlength="8" onChange={this.onHandleChange} type="password" name="password" className="form-control" placeholder="Your Password *" />
                                            </div>
                                            <div className="form-group">
                                                <input minlength="8" maxlength="8" onChange={this.onHandleChange} type="password" name="password1" className="form-control" placeholder="Confirm Password *" />
                                            </div>
                                            <input type="submit" onClick={this.onHandleSubmit} className="btnRegister" value="Register" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>












                {/* <div className="container register-form" style={{width:'60%',}}>
                    <div className="form">
                        <div className="note">
                            <p>Wellcome to Sign Up this Form.</p>
                        </div>

                        <div className="form-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="username" onChange={this.onHandleChange} className="form-control" placeholder="Your Name *" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.onHandleChange} name="phoneNumber" type="text" className="form-control" placeholder="Phone Number *" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input onChange={this.onHandleChange} type="text" name="password" className="form-control" placeholder="Your Password *" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.onHandleChange} type="text" className="form-control" placeholder="Confirm Password *" />
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={this.onHandleSubmit} className="btnSubmit">Submit</button>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
