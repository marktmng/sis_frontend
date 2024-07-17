import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../Constants";
import "../Lecturer.css";

function Lecturer(props) {
  const [lecturerData, setLecturerData] = useState([]); // State to store fetched data

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/lecturer/",
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLecturerData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="lecturer-container">
      <h2 className="lecturer-heading">Lecturers</h2>
      <table className="lecturer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Program ID</th>
          </tr>
        </thead>
        <tbody>
          {lecturerData.map((lecturer) => (
            <tr key={lecturer.id}>
              <td>{lecturer.name}</td>
              <td>{lecturer.email}</td>
              <td>{lecturer.program}</td>
            </tr>
          ))}
          {lecturerData.length === 0 && (
            <tr>
              <td colSpan="3" className="no-lecturers">
                No lecturers found.
              </td>
            </tr>
          )}
          {lecturerData.length > 0 && (
            <tr>
              <td colSpan="3" className="total-lecturers">
                No lecturers found {lecturerData.length}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Lecturer;
