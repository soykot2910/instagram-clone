import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function About() {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    for (const key of Object.keys(image)) {
      formData.append("image", image[key]);
    }

    formData.append("title", title);
    formData.append("body", body);

    await axios.post(
      "http://localhost:4000/api/posts/createPost",
      formData,
      {}
    );
    history.push("/");
  };

  return (
    <div className="form-wrapper text-center py-5">
      <Container>
        <h1>Add A New Post</h1>
        <Form onSubmit={(e) => handleSubmit(e)} className="input-form">
          <Form.Control
            className="my-3"
            size="lg"
            type="text"
            placeholder="Enter Post Name"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              name="body"
              value={body}
              rows={3}
              onChange={(e) => setBody(e.target.body)}
            />
          </Form.Group>
          <div className="mb-3 form-control">
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files)}
              multiple
            />
          </div>
          <div className="d-grid">
            <Button size="lg" type="sumbit">
              Add Post
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
