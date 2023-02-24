import React from "react";
import "../Components/styles/styles.scss";

export default function Demo() {
  return (
    <div className="main">
      <div className="main-inner">
        <div className="box">
          <label className="text-main">
            Name
            <input type="text" placeholder="type" className="text" />
          </label>
          <label className="text-main-1">
            Email
            <input type="email" placeholder="email" className="text-1" />
          </label>
        </div>
      </div>
    </div>
  );
}
