import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__copyright">
        <small>&copy; 2020 Lendbuddy, Inc</small>
      </div>
      <div className="footer__icons">
        <Button>
          <FacebookIcon fontSize="large" />
        </Button>
        <Button>
          <TwitterIcon fontSize="large" />
        </Button>
        <Button>
          <InstagramIcon fontSize="large" />
        </Button>
      </div>
    </div>
  );
}

export default Footer;
