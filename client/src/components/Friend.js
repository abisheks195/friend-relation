import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Friend(props) {
  
  const user = props.location.state;

  const [data, setData] = useState([]);

  useEffect(() => {

    // POST request to get all the friends of a user
    axios.post('http://localhost:8000/user/:id/friend', user)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <div>
      <div className="container">

        <img src={user.avatar} alt="Avatar" style={{width: "10%", height: "5%"}}/>

        <br/>
        <br/>

        <h1 style={{color: "white"}}>{user.firstName} {user.lastName}</h1>

        <br/>

        <h3 style={{color: "white"}}>Friends:</h3>

        <br/>

        <table className="table">

          {/* Header of the table */}
          <thead>
            <tr>
              <th scope="col" style={{color: "white"}}>Name</th>
            </tr>
          </thead>

          {/* Body of the table */}
          <tbody>
            {/* Mapping the data which we get through the POST request in useEffect */}
          {data.map((item) => (
              <tr key={item.user_id}>
                <td><Link
                  to={{
                    pathname: `/user/${item.user_id}/friends`,
                    state: item,
                  }}>
                  {item.firstName} {item.lastName}
                </Link></td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  )
}
