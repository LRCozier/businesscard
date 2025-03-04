import React from "react";
import Link from "react-router-dom";

const Mail = ({mailto, label}) => {

  return (
    <>
    <Link to=''
    onclick={ (e) => {
      window.location.href = mailto;
      e.preventDefault();
    }}>
      {label}
    </Link>
    </>
  )
}

export default Mail;

//https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea Solution for function above