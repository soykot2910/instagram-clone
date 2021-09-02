import React from "react";
import classes from "./sideBar.module.css";
import SuggestUser from "./suggestion/SuggestUser";

export default function SideBar() {
  return (
    <div className="my-4   position-fixed d-none d-lg-block">
      <div className="d-flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU"
          alt="user"
          className={classes.loginUserImg}
        />
        <div className="me-5">
          <p className={classes.loginUser}>jon21</p>
          <p className="text-muted">jon Doe</p>
        </div>
        <a href="/switch" className="ms-5 fw-bold mt-3">
        switch 
        </a>
      </div>
      <div className="suggestions mt-3">
        <div className="d-flex">
          <p className="text-muted">Suggestions For You</p>
          <a href="/see-all" className="ms-auto text-dark">
            See All
          </a>
        </div>
        <SuggestUser />
        <SuggestUser />
        <SuggestUser />
      </div>
    </div>
  );
}
