import React, { useEffect, useState } from "react";
import axios from "axios";

function ReportList() {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://127.0.0.1:8000/reports/",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setReports(res.data);
    };

    fetchReports();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>All Reports</h3>
      <ul>
        {reports.map((r) => (
          <li key={r.id}>
            {r.location} | pH: {r.ph} | Turbidity: {r.turbidity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReportList;
