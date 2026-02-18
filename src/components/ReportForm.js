import React, { useState } from "react";
import axios from "axios";

function ReportForm() {
  const [form, setForm] = useState({
    location: "",
    ph: "",
    turbidity: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await axios.post(
      "http://127.0.0.1:8000/reports/",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Report Created Successfully");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Create Report</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Location"
          onChange={(e)=>setForm({...form,location:e.target.value})}/>
        <br /><br />
        <input placeholder="pH"
          onChange={(e)=>setForm({...form,ph:e.target.value})}/>
        <br /><br />
        <input placeholder="Turbidity"
          onChange={(e)=>setForm({...form,turbidity:e.target.value})}/>
        <br /><br />
        <input placeholder="Description"
          onChange={(e)=>setForm({...form,description:e.target.value})}/>
        <br /><br />
        <button>Create Report</button>
      </form>
    </div>
  );
}

export default ReportForm;
