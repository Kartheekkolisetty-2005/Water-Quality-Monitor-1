import React from "react";
import Header from "../components/Header";
import ReportForm from "../components/ReportForm";
import ReportList from "../components/ReportList";
import MapView from "../components/MapView";

function Dashboard() {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <MapView />
        <ReportForm />
        <ReportList />
      </div>
    </div>
  );
}

export default Dashboard;
