import React from "react";
import { Card, Container, Form, FormControl, Button } from "react-bootstrap";
import classes from "./signup.module.css";
import Logo from "../../assets/images/instagram.png";
import PlayStore from "../../assets/images/playstore.png";
import AppStore from "../../assets/images/appStore.png";

export default function Login() {
  return (
    <Container style={{ marginTop: "4rem" }}>
      <Card className={classes.signUpCard}>
        <div className={classes.logoWrapper}>
          <img src={Logo} className={classes.logo} alt="logo" />
        </div>
        <h5 className="text-muted text-center mb-4">
          Sign up to see photos and videos from your friends.
        </h5>
        <Button>
          <i className={`bi bi-facebook ${classes.fbSignUPBtn}`} />
          Log in with Facebook
        </Button>
        <p className={classes.or}>OR</p>
        <Form>
          <FormControl placeholder="Email" className={classes.formInput} />
          <FormControl placeholder="Full Name" className={classes.formInput} />
          <FormControl placeholder="Username" className={classes.formInput} />
          <FormControl placeholder="Password" className={classes.formInput} />
          <Button className="w-100 my-3">Sign up</Button>

          <p className={classes.termPolicy}>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
        </Form>
      </Card>
      <Card className={classes.signUpCard}>
        <p>
          Don't have an accoutn? <a href="/login">Log in</a>
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
