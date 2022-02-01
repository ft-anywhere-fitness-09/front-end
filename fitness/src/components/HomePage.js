import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Welcome to Anywhere Fitness 💪
      </h1>
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        “The body achieves what the mind believes.”
      </h3>
      <img
        style={{ marginLeft: "30%", maxWidth: "40%" }}
        src="https://cdn.pixabay.com/photo/2020/03/24/11/13/workout-equipment-4963665_1280.png"
      />
    </div>
  );
};

export default HomePage;
