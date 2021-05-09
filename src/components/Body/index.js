import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import flatten from 'flat'
import "./style.css";

function Body() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    API.getUsers().then(results => {
      setUsers(results.data.results);
      setFilteredUsers(results.data.results);
    });
  }, []);  // Empty brackets define to run ONCE

  function SearchChangeHandler(event) {
    let filterText = event.target.value;
    console.log(filterText);

    // let filteredList = users.filter((user) => {
    //   let flattened = flatten(user);
    //   let values = Object.values(flattened).join('').toLowerCase();
    //   return values.indexOf(filterText.toLowerCase()) !== -1;
    // });

    let filteredList = users.filter((user) => {
      let userValues = user.name.first + ' ' + user.name.last + ' ' + user.email + ' ' + user.login.username + user.cell;
      return userValues.toLowerCase().includes(filterText.trim().toLowerCase());
    });

    setFilteredUsers(filteredList);
  }


  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="navbar-collapse row" id="navbarNav">
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={event => SearchChangeHandler(event)}
              />
          </form>
        </div>
      </nav>
      <div className="datatable mt-5">
        <table
          id="table"
          className="table table-striped table-hover table-condensed"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(({ name, email, login, cell }) => {
              return (
                <tr>
                  <td data-th="Name" className="name-cell align-middle">
                    {name.first} {name.last}
                  </td>
                  <td data-th="Phone" className="align-middle">
                    {cell}
                  </td>
                  <td data-th="Email" className="align-middle">
                    <a href={"mailto:" + email} target="__blank">
                      {email}
                    </a>
                  </td>
                  <td data-th="Login" className="align-middle">
                    {login.username}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* {filteredUsers.map(({ name }) => <div>{ `${name.first} ${name.last}` }</div>)} */}
    </div>
  );
}

export default Body;
