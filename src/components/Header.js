import React from "react";

function Header() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{
      background: "#1976d2",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>Water Quality Monitor</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Header;
