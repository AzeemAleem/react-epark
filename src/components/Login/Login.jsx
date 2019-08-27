import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import axios from "axios"
export default class Login extends Component {

    onHandleLogin = (e) => {
        axios.post("/login", this.state).then(res => {
            if (res.data == 200) {
                this.props.history.push("/")
            }

        })
    }

    onHandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    // onHandleSignUp = e =>{
    //     this.props.history.push("/sign_up")
    // }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="body">
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Sign In</h3>

                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            </div>
                                            <input type="text" onChange={this.onHandleChange} name="username" className="form-control" placeholder="username" />

                                        </div>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                                            </div>
                                            <input type="password" onChange={this.onHandleChange} name="password" className="form-control" placeholder="password" />
                                        </div>
                                        <div className="row align-items-center remember">
                                            <input type="checkbox" />Remember Me
					</div>
                                        <div className="form-group"><button type="button" onClick={this.onHandleLogin} name="button" className="btn float-right login_btn">Login</button>

                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Don't have an account?<Link className="link" to="/sign_up">Sign Up</Link>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <a href="#"><Link className="link" to="/sign_up">Forgot your password?</Link></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container h-100 mainl">
                    <div className="d-flex justify-content-center h-100">
                        <div className="user_card">
                            <div className="d-flex justify-content-center">
                                <div className="brand_logo_container">
                                    <img src="./images/user.png" className="brand_logo" alt="Logo" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center form_container">
                                <form>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" onChange={this.onHandleChange} name="username" className="form-control input_user" placeholder="username" />
                                    </div>
                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" onChange={this.onHandleChange} name="password" className="form-control input_pass" placeholder="password" />
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                            <label className="custom-control-label" for="customControlInline">Remember me</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="button" onClick={this.onHandleLogin} name="button" className="btn login_btn">Login</button>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account? <a href="#" className="ml-2"><Link className="link" to="/sign_up">Sign Up</Link></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
