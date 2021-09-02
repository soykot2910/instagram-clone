import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "./postCard/PostCard";

export default function AllPost() {
  const [posts, setPosts] = useState([""]);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get("http://localhost:5000/api/posts");
      setPosts(data["posts"]);
    }
    fetchPost();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostCard />
      ))}
    </>
  );
}
