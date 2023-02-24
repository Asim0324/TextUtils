import React from "react";

export default function Alert(props) {
//   const capitalize = (word) => {
    // const lower = word.toLowerCase();
    // return lower.charAt(0).toUpperCase + lower.slice(1);
    // return word.charAt(0).toUpperCase + word.slice(1);
//   };

  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{props.alert.type} :</strong> {props.alert.message}
      </div>
    )
  );
}
