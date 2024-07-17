import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../Constants";
import "../Program.css";

function Program(props) {
  const [programData, setProgramData] = useState([]); // State to store fetched data

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/program/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setProgramData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="program-container">
      <h2 className="program-heading">List of Programs</h2>
      <div className="program-list">
        {programData.map((program) => (
          <div key={program.id} className="program-item">
            <h3 className="program-name">{program.name}</h3>
            <p className="program-duration">
              Duration: {program.duration_months} months
            </p>
            {/* Add more details as needed */}
          </div>
        ))}
        {programData.length === 0 && (
          <p className="no-programs">No programs found.</p>
        )}
      </div>
    </div>
  );
}

export default Program;
