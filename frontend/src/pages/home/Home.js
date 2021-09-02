import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import classes from "./home.module.css";
import AllPost from "../../components/allpost/post";
import SideBar from "../../components/sidebar/SideBar";
import StoryCard from "../../components/storyCard/StoryCard";

export default function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/users");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    loadUsers();
  };

  return (
    <div className={classes.container}>
      <Row>
        <Col lg={8}>
        <StoryCard/>
          <AllPost />
        </Col>
        <Col lg={4}>
          <SideBar />
        </Col>
      </Row>
    </div>
  );
}
