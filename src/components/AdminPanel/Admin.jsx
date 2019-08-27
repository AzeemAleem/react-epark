import React, { Component } from 'react';
import User from './../User/User';
import axios from 'axios';





export default class Admin extends Component {
    state = {
        users:[],
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
        console.log('state in signup', this.state)
        return (
            <div>
                <User users={this.state.users} getUsers={this.getUsers} del={this.delUser}/>
            </div>
        )
    }
}
