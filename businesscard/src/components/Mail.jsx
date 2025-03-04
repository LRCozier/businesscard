import React from "react";

const Mail = ({mailto, label}) => {
  const handleClick = () => {
    window.location.href = mailto;
  }

  return (
    <>
    <button onClick={handleClick}>
      {label}
    </button>
    </>
  )
}

export default Mail;