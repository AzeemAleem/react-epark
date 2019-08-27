import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { postData } from './Data';
import axios from 'axios';

class Body extends Component {
    state = {
        post: [],
        id: "sdsd"
    };
    componentDidMount(){
        axios.get('/irfan1')
        .then(res =>{
           this.setState({
               post: [...res.data]
           })
        })
        .catch(e =>{
            console.log("error of body", e);
        })  

    }
    render() {
        console.log('body state data',this.state.post);
        const { post } = this.state;
        // console.log(post, 'post data')
        let response = post.map((post, index) => {
            return (
                <div className="col-lg-3" key={index}>
                    <Link to={`/post/${post.id}`}>
                        <div className="product-box">
                            <div className="product-box-img">
                                <img src={post.img} className="img-responsive" alt="theme" />
                                {/* <a className="view-icon" href="#"><i className="flaticon-more"></i></a> */}
                            </div>
                            <div className="product-box-content">
                                <div>
                                    {/* <a href="#"> */}
                                    {post.h1}
                                    {/* </a> */}
                                </div>
                                <p>{post.para}</p>
                                {/* <Link to={`/post/${post.id}`}> */}
                                    <button type="button" className="btn btn-success" >Reserve Now</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </Link>
                </div >
            );
        });
        return (
            <div>
                <div id="main-body" className="main-body-area section-space bg-accent2 position-relative">
                    <div className="container">
                        <div className="section-heading">
                            <p>Welcome To</p>
                            <h2>Our Registered Parking Places</h2>
                        </div>
                        <div className="row">
                            {/* <div className="col-lg-3">
                                <div className="product-box">
                                    <div className="product-box-img">
                                        <img src="./images/home1.jpg" className="img-responsive" alt="theme" />
                                        <a className="view-icon" href="#"><i className="flaticon-more"></i></a>
                                    </div>
                                    <div className="product-box-content">
                                        <div><a href="#">Home 1</a></div>
                                    </div>
                                </div>
                            </div> */}
                            {response}

                            {/* <div className="col-lg-3">
                                <div className="product-box">
                                    <div className="product-box-img">
                                        <img src="./images/home2.jpg" className="img-responsive" alt="theme" />
                                        <a className="view-icon" href="#"><i className="flaticon-more"></i></a>
                                    </div>
                                    <div className="product-box-content">
                                        <div><a href="#">Home 2</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-box">
                                    <div className="product-box-img">
                                        <img src="./images/recipe1.jpg" className="img-responsive" alt="theme" />
                                        <a className="view-icon" href="#"><i className="flaticon-more"></i></a>
                                    </div>
                                    <div className="product-box-content">
                                        <div><a href="#">Recipe With Sidebar</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-box">
                                    <div className="product-box-img">
                                        <img src="./images/recipe2.jpg" className="img-responsive" alt="theme" />
                                        <a className="view-icon" href="#"><i className="flaticon-more"></i></a>
                                    </div>
                                    <div className="product-box-content">
                                        <div><a href="#">Recipe Without Sidebar</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-box">
                                    <div className="product-box-img">
                                        <img src="./images/category.jpg" className="img-responsive" alt="theme" />
                                        <a className="view-icon" href="#"><i className="flaticon-more"></i></a>
                                    </div>
                                    <div className="product-box-content">
                                        <div><a href="#">Category</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-box">
                                    <div className="product-box-img">
                                        <img src="./images/author.jpg" className="img-responsive" alt="theme" />
                                        <a className="view-icon" href="#"><i className="flaticon-more"></i></a>
                                    </div>
                                    <div className="product-box-content">
                                        <div><a href="#">Author</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-box">
                                    <div className="product-box-img">
                                        <img src="./images/submit-recipe.jpg" className="img-responsive" alt="theme" />
                                        <a className="view-icon" href="#"><i className="flaticon-more"></i></a>
                                    </div>
                                    <div className="product-box-content">
                                        <div><a href="#">Submit Recipe</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-box">
                                    <div className="product-box-img">
                                        <img src="./images/shop.jpg" className="img-responsive" alt="theme" />
                                        <a className="view-icon" href="#"><i className="flaticon-more"></i></a>
                                    </div>
                                    <div className="product-box-content">
                                        <div><a href="#">Shop</a></div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Body;