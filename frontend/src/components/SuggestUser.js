import React from "react";

export default function SuggestUser() {
  return (
    <div
      className="suggest-user post-header d-flex p-2 justify-content-between"
      style={{ cursor: "pointer" }}
    >
      <div className="user-profile d-flex">
        <div className="avater-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU"
            alt="hime"
            className="user-img"
          />
        </div>
        <div className="suggest-user-profile ms-3 ">
          <p className="user-name fw-bold">jon21</p>
          <p className="text-muted">New to Instagram </p>
        </div>
      </div>
      <a href="/follow" className="mt-2">
        follow
      </a>
    </div>
  );
}
