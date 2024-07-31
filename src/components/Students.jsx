import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../Constants";

function Students(props) {
  const [studentData, setStudentData] = useState([]); // State to store fetched data

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/student/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setStudentData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="lecturer-container">
      <h2 className="lecturer-heading">Students</h2>
      <table className="lecturer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Program ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((studentData) => (
            <tr key={studentData.id}>
              <td>{studentData.name}</td>
              <td>{studentData.email}</td>
              <td>{studentData.program}</td>
              <td>{studentData.status}</td>
            </tr>
          ))}
          {studentData.length === 0 && (
            <tr>
              <td colSpan="3" className="no-lecturers">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
