import React from "react";
import classes from "./messageBox.module.css";

export default function MessageBox() {
  return (
    <div className={`${classes.msgBox}`}>
      <div className={classes.inputBox}>
        <input className={classes.input} placeholder="Message..." />
        <div className={classes.inputIcon}>
          <i className="bi bi-emoji-smile "></i>
          {/* <div>
            <i class="bi bi-image"></i>
            <i class="bi bi-heart"></i>
          </div> */}
        </div>
      </div>
    </div>
  );
}
