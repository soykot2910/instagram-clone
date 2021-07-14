import React from "react";
import SuggestUser from "./SuggestUser";

export default function SideBar() {
  return (
    <div className="slidebar-wrapper my-4 d-none d-lg-block">
      <div className="user-info d-flex">
        <div className="user-img-wrapper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU"
            alt="user"
            className="login-user-img"
          />
        </div>
        <div className="login-user ms-3">
          <p className="user-name fw-bold">jon21</p>
          <p className="text-muted">jon Doe</p>
        </div>
        <a href="/switch" className="ms-auto fw-bold mt-3">
          Switch
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
