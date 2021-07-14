import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import AllPost from "../components/AllPost";
import SideBar from "../components/SideBar";

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
    <Container>
      <Row>
        <Col lg={8}>
          <AllPost />
        </Col>
        <Col lg={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}
