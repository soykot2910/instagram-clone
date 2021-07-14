import React from "react";
import { Card } from "react-bootstrap";

export default function PostCard() {
  return (
    <Card className="my-4">
      <div
        className="post-header d-flex p-2 justify-content-between"
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
          <p className="ms-3 mt-2 fw-bold">jon doe</p>
        </div>
        <i className="bi bi-three-dots"></i>
      </div>
      <Card.Img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />

      <Card.Body>
        <div className="action-icon-wrapper  d-flex justify-content-between">
          <div className="icons">
            <i class="bi bi-heart"></i>
            <i class="bi bi-chat"></i>
            <i class="bi bi-share"></i>
          </div>
          <i class="bi bi-save"></i>
        </div>
        <p className="total-like fw-bold">1,545 likes</p>
        <div className="user d-flex ">
          <p className="fw-bold">jon doe</p>
          <p className="post-description ms-2">
            Reset a text or link’s color with .text-reset....
          </p>
        </div>
        <div className="comments">
          <p className="text-muted">View all 23 comments</p>
          <div className="user d-flex ">
            <p className="fw-bold">jon doe</p>
            <p className="post-description ms-2">
              Reset a text or link’s color with .text-reset....
            </p>
            <i class="bi bi-heart heart-comment"></i>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
