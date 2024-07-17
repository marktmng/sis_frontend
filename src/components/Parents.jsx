import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../Constants";

function Parents(props) {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/parent/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setParents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="lecturer-container">
      <h2 className="lecturer-heading">Parents</h2>
      <table className="lecturer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Student</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent) => (
            <tr key={parent.id}>
              <td>{parent.name}</td>
              <td>{parent.student}</td>
              <td>{parent.phone}</td>
            </tr>
          ))}
          {parents.length === 0 && (
            <tr>
              <td colSpan="3">No parents found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Parents;
