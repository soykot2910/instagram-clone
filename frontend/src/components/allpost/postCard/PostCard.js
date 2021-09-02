import React from "react";
import { Card } from "react-bootstrap";
import classes from "./postCard.module.css";

export default function PostCard() {
  return (
    <Card className="my-4">
      <div
        className="d-flex p-2 justify-content-between"
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex">
          <div className={classes.userImgWrapper}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU"
              alt="hime"
              className={classes.userImg}
            />
          </div>
          <p className="ms-3 mt-2 fw-bold">jon doe</p>
        </div>
        <i className="bi bi-three-dots"></i>
      </div>
      <Card.Img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />

      <Card.Body>
        <div className={classes.postActionIconWrapper}>
          <div className="icons">
            <i className="bi bi-heart"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-share"></i>
          </div>
          <i className="bi bi-save"></i>
        </div>
        <p className={classes.totalLike}>1,545 likes</p>
        <div className={classes.loginUser}>
          <p>
            <span className="fw-bold me-2">jon doe</span>Reset a text or link’s
            color with .text-reset....
          </p>
        </div>
        <div className="comments">
          <p className="text-muted">View all 23 comments</p>
          <div className={classes.loginUser}>
            <p>
              <span className="fw-bold me-2">jon doe</span>Reset a text or
              link’s color with .text-reset....
            </p>
            <i className={`bi bi-heart ${classes.heartComment}`}></i>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
