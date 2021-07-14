import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
