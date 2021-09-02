import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Error from "./pages/Error";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Inbox from "./pages/inbox/Inbox";
import Post from "./pages/post/Post";
import { Navbar } from "react-bootstrap";
export default function App() {
  const userInfo = localStorage.getItem("userInfo");
  var hrefLocation = window.location.href.split("/")[4];
  return (
    <Router>
      {userInfo && <Navbar />}
      {!userInfo && <Redirect to="/auth/login" />}
      {!userInfo && hrefLocation === "signup" && <Redirect to="/auth/signup" />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route exact path="/inbox" component={Inbox} />
        <Route exact path="/post/new" component={Post} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
