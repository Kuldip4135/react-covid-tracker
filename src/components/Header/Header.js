import React from "react";

const Header = () => {
  return (
    <div className="text-center mt-2 mb-5">
      <img
        src="https://i.ibb.co/7QpKsCX/image.png"
        className="img-fluid"
        alt="covid-img"
        style={{ filter: "invert(1)", height: "5rem", objectFit: "contain" }}
      />
    </div>
  );
};

export default Header;
