import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../Constants";

function Students(props) {
  const [studentData, setStudentData] = useState([]); // State to store fetched data
  const [programData, setProgramData] = useState({}); // State to store program data

  useEffect(() => {
    // Fetch students
    axios
      .get(BaseUrl + "app/student/")
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch programs
    axios
      .get(BaseUrl + "app/program/")
      .then((response) => {
        // Create a mapping of program IDs to program names
        const programMap = response.data.reduce((acc, program) => {
          acc[program.id] = program.name;
          return acc;
        }, {});
        setProgramData(programMap);
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
            <th>Program</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((studentData) => (
            <tr key={studentData.id}>
              <td>{studentData.name}</td>
              <td>{studentData.email}</td>
              <td>{programData[studentData.program]}</td>
              {/* <td>{studentData.program}</td> */}
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
