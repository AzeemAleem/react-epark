
import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import axios from 'axios';
import Navbar from './All_Theme/Navbar';
import All_Theme from './All_Theme/All_Theme';
import PostDetails from './All_Theme/PostDetails';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Contactus from './All_Theme/Contactus';
import Howitworks from './Work/Howitworks';
import Body from './All_Theme/Body';
import User from './User/User';
import Admin from './AdminPanel/Admin';
import Contact from './ContactData/ContactData';



class App extends Component {
  state = {
    post: [],
    users:[],
  }

  componentDidMount() {
    axios.get('/irfan')
      .then(res => {
        console.log(res, 'response from api');

        this.setState({ post: [...res.data] })
      })
      .catch(e => {
        console.log("error", e);
      })
  }
  reserve=(id)=>{
    console.log(this.props, "test")
    let index, posts;
    posts = this.state.post;
    posts.forEach((v, i)=>{
      if(v.id==id){
        index = i
      }
    })
    posts[index].num = posts[index].num-1
    this.setState({post: posts})
    this.props.history.push("/")
    
    alert("You have successfully reserved the slot.");
    
  }
  getUsers=()=>{
    axios.get("/getUser").then(res=>this.setState({users:res.data}))
  }
  delUser=(id)=>{
    console.log("clicked", id)
    axios.post("/delUser", {id}).then(res=>{
      this.setState({users:res.data})
    })
  }
  render() {
    console.log("post from render", this.state.post)
    // console.log('state data',this.state.post);

    return (
      <div>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={All_Theme} />
          <Route path="/post/:id" render={(props) => {
            return <PostDetails post={this.state.post} reserve={this.reserve} {...props} />
          }} />
          <Route  path="/howitworks" component={Howitworks} />
          <Route  path="/contactus" component={Contactus} />
          <Route  path="/login" component={Login} />
          <Route  path="/sign_up" component={SignUp} />
          <Route  path="/sign_up1" component={Contact} />
          <Route  path="/body" component={Body} />
          <Route  path="/dashboard" component={Admin} />

          >
          
          {/* <Route exact path="/post" component={Footer} /> */}

        {/* <User users={this.state.users} getUsers={this.getUsers} del={this.delUser}/> */}
        </Switch>
       
      </div>
    )
  }
}

export default withRouter(App);

