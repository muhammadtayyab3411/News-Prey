import React from "react";
import loadingSpinner from "./Spinner.gif";

export default function Spinner() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <img
          src={loadingSpinner}
          alt="loading"
          className="text-center"
          width={"70px"}
          height={"70px"}
          style={{ marginTop: "5rem" }}
        />
      </div>
    </>
  );
}
