import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PostDetails.css';

// import { postData } from "../Data/postData";

// const state ={
//   slot: 152
// }


const PostDetails = props => {
  console.log(props.post, "error post");
  let post = props.post.filter((post, index) => {
    return post.id == props.match.params.id;
  });

const state ={
slot: post.num
}
// console.log("post data of id")
  // const onHandleSubmit = (e) => {
  //   alert("You have successfully reserved the slot.");
    
  //   props.history.push("/");
  //   setState({
  //     slot:slot-1      
  //   })
    

  // }

  return (
    <div>

      {post.map((post, index) => {

        return (
          <div key={post.id}>
            <div className="container" >
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="mt-4 title">{post.title}</h1>

                  <hr className="hr" />
                  <p className="postdata">{post.date} {post.num}</p>
                  <hr className="hr" />

                  <p className="postdata">Total Slots: {post.date1}</p>
                  <hr className="hr" />

                  <select className="dropdown">
                    <option value="volvo">For 1 hours</option>
                    <option value="saab">For 2 hours</option>
                    <option value="opel">For 3 hours</option>
                    <option value="audi">For 4 hours</option>
                  </select>
                  <br /><br />
                  <button onClick={()=>props.reserve(post.id)} id="myBtn" className="button button2" >Reserve Now</button>

                </div>
                <div className="col-md-6">
                  <div className="card my-4">

                    <iframe src={post.img} width="580" height="550" frameborder="0" style={{ border: "0", marginRight: '30px' }} allowFullScreen></iframe>

                  </div>


                </div>

              </div>
            </div>
          </div>

        );
      })};
    </div>
  );
};
export default PostDetails;

