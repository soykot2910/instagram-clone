import React from "react";
import classes from "./suggestion.module.css";

export default function SuggestUser() {
  return (
    <div
      className=" d-flex p-2 justify-content-between"
      style={{ cursor: "pointer" }}
    >
      <div className={classes.suggestUserProfile}>
        <div className={classes.userImgWrapper}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU"
            alt="hime"
            className={classes.userImg}
          />
        </div>
        <div className={classes.suggestUserINfo}>
          <p className={classes.seggestUserName}>jon21</p>
          <p className="text-muted">New to Instagram </p>
        </div>
      </div>
      <a href="/follow" className="mt-2">
        follow
      </a>
    </div>
  );
}
