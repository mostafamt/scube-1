import React from "react";

import { IoPersonOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div
      style={{
        minHeight: "50%",
        width: "100%",
        backgroundColor: "#555",
        color: "#fff",
        fontSize: "5rem",
        fontWeight: "100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IoPersonOutline />
    </div>
  );
};

export default Card;
