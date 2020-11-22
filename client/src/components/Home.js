import React, { useEffect, useState } from "react";
import Pagination from './Pagination';

import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    // GET all the users from the database
    axios
      .get("http://localhost:8000/user/all")
      .then((res) => {
        console.log(res.data);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Changing page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>

      <h1 style={{color: "white"}}>List of users:</h1>

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
          {/* Mapping through the paginated data */}
          {currentData.map((item) => (
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
      
      <h6 style={{color: "grey"}} className="my-4">Displaying 10 items per page</h6>
      
      <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate}/>
    </div>
  );
}
