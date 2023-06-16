import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    margin: "1rem auto",
    color: "#fff",
    textAlign: "center",
    backgroundColor: bgColor,
    fontWeight: "bold",
    borderRadius: ".25rem",
    width: "500px"
  };

  return (
    <div style={styles}>
      <p dangerouslySetInnerHTML={{__html:msg}}></p>
    </div>
  );
};

export default Message;
