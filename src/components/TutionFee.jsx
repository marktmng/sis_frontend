import React from "react";
import { BaseUrl } from "../Constants";
import { useEffect, useState } from "react";
import axios from "axios";

function TutionFee(props) {
  const [tutionfee, setTutionfee] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BaseUrl + "app/tuitionfee/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setTutionfee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="lecturer-container">
      <h2 className="lecturer-heading">Tution Fee Records</h2>
      <table className="lecturer-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Paid Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tutionfee.map((tutionfee) => (
            <tr key={tutionfee.id}>
              <td>{tutionfee.student}</td>
              <td>{tutionfee.paid_date}</td>
              <td>{tutionfee.amount}</td>
            </tr>
          ))}
          {tutionfee.length === 0 && (
            <tr>
              <td colSpan="3" className="no-lecturers">No Tution Fee Records</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TutionFee;
