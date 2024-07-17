import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../Constants";

function StudentMark(props) {
  const [studentmark, setStudentmark] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/studentmark/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setStudentmark(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="lecturer-container">
      <h2 className="lecturer-heading">Student Marks</h2>
      <table className="lecturer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mark</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {studentmark.map((studentmark) => (
            <tr key={studentmark.id}>
              <td>{studentmark.student}</td>
              <td>{studentmark.mark}</td>
              <td>{studentmark.course}</td>
            </tr>
          ))}
          {setStudentmark.length === 0 && (
            <tr>
              <td colSpan="3" className="no-lecturers">No student marks found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentMark;
