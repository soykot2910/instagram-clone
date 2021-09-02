import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const InstagramContext = createContext();

const InstagramProvider = ({ children }) => {
  var userInfo = localStorage.getItem("userInfo");

  useEffect(() => {}, []);

  const addPost = async (formData) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/posts/createPost",
      formData
    );
  };

  return (
    <InstagramContext.Provider value={{ addPost, userInfo }}>
      {children}
    </InstagramContext.Provider>
  );
};

export { InstagramContext, InstagramProvider };
