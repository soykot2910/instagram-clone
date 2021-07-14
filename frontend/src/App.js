import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Error from "./pages/Error";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
