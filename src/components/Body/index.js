import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import flatten from 'flat'
import API from '../../utils/API';
import './style.css';

function Body() {
  const [dummyFlag, setDummyFlag] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isSortAsc, setIsSortAsc] = useState(true);

  useEffect(() => {
    //console.log(`INITIAL useEffect() - isSortAsc: ${isSortAsc}`)

    API.getUsers().then(results => {
      setUsers(results.data.results.sort(sortCompare));
      setFilteredUsers(results.data.results.sort(sortCompare));
    });
  }, []);  // Empty brackets define to run ONCE

  useEffect(() => {
    //console.log(`UPDATED useEffect() - isSortAsc: ${isSortAsc}`)
    
    // FOR SOME REASON THIS NEEDS TO BE HERE, UPDATING ANOTHER STATE, OTHERWISE SORTING DOESN'T WORK THE FIRST COUPLE CLICKS
    // IT WILL EVEN START SORTING IN REVERSE ORDER SOMETIMES WITHOUT THIS, NOT SURE WHY
    setDummyFlag(!dummyFlag);

    let sortedUsers = filteredUsers.sort(sortCompare);
    setFilteredUsers(sortedUsers);

  }, [isSortAsc]);

  function SearchChangeHandler(event) {
    let filterText = event.target.value;

    // CAN USE THIS IF YOU WANT TO FILTER BASED ON ALL PROPERTIES IN THE ENTIRE OBJECT TREE, IT WILL FLATTEN AND THEN GET ALL PROPERTIES
    // let filteredList = users.filter((user) => {
    //   let flattened = flatten(user);
    //   let values = Object.values(flattened).join('').toLowerCase();
    //   return values.indexOf(filterText.toLowerCase()) !== -1;
    // });

    let filteredList = users.filter((user) => {
      let userValues = user.name.first + ' ' + user.name.last + ' ' + user.email + ' ' + user.login.username + user.cell;
      return userValues.toLowerCase().includes(filterText.trim().toLowerCase());
    });

    setFilteredUsers(filteredList.sort(sortCompare));
  }

  function sortCompare(a, b) {
    var result = 0;
    
    // default to ascending
    let userX = a;
    let userY = b;

    if (!isSortAsc) {
      // set to descending
      userX = b;
      userY = a;
    }
    
    result = userX.name.first.toLowerCase().localeCompare(userY.name.first.toLowerCase());
    return result;
  }

  function SortHandler(event) {
    if (isSortAsc) {
      setIsSortAsc(false);
    } else {
      setIsSortAsc(true);
    }
  }

  return (
    <div>
      <nav className='navbar bg-light'>
          <form>
            <input
              className='form-control'
              type='search'
              placeholder='Search'
              onChange={event => SearchChangeHandler(event)}
            />
          </form>
      </nav>
      <main className='mt-5'>
        <table
          className='table table-striped table-hover table-condensed'
        >
          <thead>
            <tr>
              <th>Photo</th>
              <th
                onClick={() => { SortHandler(); }}
              >
                Name
                <FontAwesomeIcon className='caret' icon={isSortAsc ? faCaretUp : faCaretDown} />
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(({ picture, name, email, login, cell }) => {
              return (
                <tr key={login.uuid}>
                  <td data-th='Photo' className='align-middle'>
                    <img
                      src={picture.medium}
                      alt={'profile pic'}
                    />
                  </td>
                  <td data-th={'Name'} className='align-middle'>
                    {name.first} {name.last}
                  </td>
                  <td data-th='Phone' className='align-middle'>
                    {cell}
                  </td>
                  <td data-th='Email' className='align-middle'>
                    <a href={'mailto:' + email} target='__blank'>
                      {email}
                    </a>
                  </td>
                  <td data-th='Login' className='align-middle'>
                    {login.username}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      {/* {filteredUsers.map(({ name }) => <div>{ `${name.first} ${name.last}` }</div>)} */}
    </div>
  );
}

export default Body;
