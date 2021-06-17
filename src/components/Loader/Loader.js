import React from "react";
import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loader() {
  return (
    <div className="container text-center">
      <Spinner type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default Loader;
