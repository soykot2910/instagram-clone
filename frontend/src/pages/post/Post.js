import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./Post.module.css";
import { InstagramContext } from "../../context/Context";

export default function About() {
  const { addPost } = useContext(InstagramContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    addPost(formData);
  };

  return (
    <div className={`py-4 ${classes.container}`}>
      <h1 className="text-center">Add A New Post</h1>
      <Form onSubmit={(e) => handleSubmit(e)} className="input-form">
        <Form.Control
          className="my-3"
          size="lg"
          type="text"
          placeholder="Write a caption"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="mb-3 form-control">
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            multiple
          />
        </div>
        <div className="d-grid">
          <Button size="lg" type="sumbit">
            Add Post
          </Button>
        </div>
      </Form>
    </div>
  );
}
