import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
