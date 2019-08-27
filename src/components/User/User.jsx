import React, { Component } from 'react';
import { Link } from "react-router-dom";


class User extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    console.log(this.props.users)
    return (
      <div>
        <div class="container">
          <h2>Admin Panel</h2>
          <p>Assigning Roles to the appropirate Users
            <span> <button className="btn btn-lg "> <Link className="link" to="/sign_up">Add User</Link></button></span>
            <span> <button className="btn btn-lg "> <Link className="link" to="/body">Reserve Slot</Link></button></span>
            <span> <button className="btn btn-lg "> <Link className="link" to="/login">Login User</Link></button></span>
            <span> <button className="btn btn-lg "> <Link className="link" to="/login">Admin Login</Link></button></span>
          </p>
          <table class="table table-striped">
            <thead>
              <tr>
                <th onClick={() => console.log("test")}>Name</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {this.props.users.map((data, i) => {
                return (
                  <tr key={data._id}>
                    <td onClick={() => console.log("test")}>{data.username}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.role}</td>
                    <td onClick={() => this.props.del(data._id)}><button className="btn btn-danger ">delete</button></td>

                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default User;