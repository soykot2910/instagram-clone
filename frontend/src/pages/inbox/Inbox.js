import React from "react";
import classes from "./inbox.module.css";
import {  Row, Col } from "react-bootstrap";
import Sidebar from "../../components/inbox/Sidebar";
import MessageBox from "../../components/inbox/messageBox/MessageBox";

export default function Inbox() {
  return (
    <div
      className={`mt-3 card border-bottom-0 ${classes.container}`}
    >
      <Row className="border">
        <Col md={5} className={`border-end ${classes.leftCol}`}>
          <Sidebar/>
        </Col>
        <Col md={7}>
          <div
            className={`border-bottom ${classes.userInfoWrap}`}
            style={{ padding: "0px", marginTop: "10px" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIbXiFSs6bFoTbWt2tlmzOUuntjbnmJfjgg&usqp=CAU"
              alt="user"
              style={{ width: "30px", height: "30px" }}
              className={classes.userImg}
            />
            <div className={classes.userInfo}>
              <p>jon21</p>
            </div>
            <p className="ms-auto ">
              <i class="bi bi-info-circle"></i>
            </p>
          </div>
          <div>
            <MessageBox/>
          </div>
        </Col>
      </Row>
    </div>
  );
}
