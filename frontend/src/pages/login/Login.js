import React from "react";
import { Card, Container, Form, FormControl, Button } from "react-bootstrap";
import classes from "./login.module.css";
import Logo from "../../assets/images/instagram.png";
import PlayStore from "../../assets/images/playstore.png";
import AppStore from "../../assets/images/appStore.png";

export default function Login() {
  return (
    <Container style={{ marginTop: "4rem" }}>
      <Card className={classes.loginCard}>
        <div className={classes.logoWrapper}>
          <img src={Logo} className={classes.logo} alt="logo" />
        </div>
        <Form>
          <FormControl
            placeholder="Username or email"
            aria-label="Text input with checkbox"
            className={classes.formInput}
          />
          <FormControl
            placeholder="password"
            aria-label="Text input with checkbox"
          />
          <Button className="w-100 my-3">Log In</Button>
        </Form>
        <p className={classes.or}>OR</p>
        <div className="d-flex">
          <i className="bi bi-facebook text-primary"></i>
          <a href="/" className="mt-3">
            Login in with Facebook
          </a>
        </div>
      </Card>
      <Card className={classes.loginCard}>
        <p>
          Don't have an accoutn? <a href="/signup">Sign up</a>
        </p>
      </Card>

      <div className="text-center mb-5">
        <p>Get the app</p>
        <div>
          <img src={PlayStore} className={classes.btnApp} alt="playstore" />
          <img src={AppStore} className={classes.btnApp} alt="playstore" />
        </div>
      </div>
    </Container>
  );
}
