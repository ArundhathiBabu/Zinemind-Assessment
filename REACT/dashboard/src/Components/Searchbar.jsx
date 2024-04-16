import React, { useState } from 'react';
import '../Styles/Styles.css';
import user from '../Userdata/User.json'; 

function Searchbar() {
  const [users, setUsers] = useState[(user)]; 

  return (
    <>
      <div className="inner-content d-flex">
        <div className="right-content">
          <div className="d-flex justify-content-between">
            <p className="search-text pt-2 pl-3">Search</p>
            <div className="d-flex pt-3 pr-3">
              <div><button className="chat-btn"> <span><i className="fa fa-comment pr-2"></i></span>Chat</button></div>
              <div><button className="call-btn"><span><i className="fa fa-phone pr-2"></i></span>Call</button></div>
              <div className="pipe">|</div>
              <div><i className="wishlist fa fa-heart"></i></div>
              <div><i className="refresh fa fa-rotate-right"></i></div>
            </div>
          </div>
          <div className="pt-1 pl-3">Found {users.length} Users</div>
          <div className="pt-1 pl-3 input-group input-width mt-1 ">
            <div className="input-group-prepend">
              <span className="input-group-text search-bar ">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <input type="text" className="form-control search-bar" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          </div>

          <table>
            <thead>
              <tr>
                <th>
                  <label className="container">
                    <input type="radio" />
                    <span className="checkmark"></span>
                    <span className="line-inner pl-3">|</span>
                  </label>
                </th>
                <th>
                  Name
                  <div className="fa fa-caret-down"></div>
                  <span className="line-inner pl-3">|</span>
                </th>
                <th>
                  Status
                  <div className="fa fa-caret-down"></div>
                  <span className="line-inner pl-3">|</span>
                </th>
                <th>
                  Phone Number
                  <div className="fa fa-caret-down"></div>
                  <span className="line-inner pl-3">|</span>
                </th>
                <th>
                  Email Id
                  <div className="fa fa-caret-down"></div>
                  <span className="line-inner pl-3">|</span>
                </th>
                <th>
                  Favourites
                  <div className="fa fa-caret-down"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <label className="container">
                      <input type="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.status}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.favourite ? <i className="fa fa-heart"></i> : null}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
}

export default Searchbar;
