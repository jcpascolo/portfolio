import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TweenLite, Power3 } from "gsap";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ApartmentIcon from "@material-ui/icons/Apartment";

import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    TweenLite.from("#piGrid", 1, { opacity: 0, x: 100, ease: Power3.easeOut });
    TweenLite.from("#eduGrid", 1, {
      opacity: 0,
      x: 100,
      ease: Power3.easeOut,
      delay: 0.5
    });
    // TweenLite.from("#expGrid", 1, {
    //   opacity: 0,
    //   x: 100,
    //   ease: Power3.easeOut,
    //   delay: 1
    // });
    // TweenLite.from("#psGrid", 1, {
    //   opacity: 0,
    //   x: 100,
    //   ease: Power3.easeOut,
    //   delay: 1.5
    // });
  }, []);

  return (
    <Grid container>
      <Tooltip title="Personal Information & Skills">
        <Grid id="piGrid" item xs={6} className="py-3">
          <NavLink to="/" className="col s3 center-align amarantFont">
            <PermIdentityIcon className="navIcon" />
          </NavLink>
        </Grid>
      </Tooltip>

      <Tooltip title="Education & Experience">
        <Grid id="eduGrid" item xs={6} className="py-3">
          <NavLink
            to="/education_and_exp"
            className="col s3 center-align amarantFont"
          >
            <ApartmentIcon className="navIcon" />
          </NavLink>
        </Grid>
      </Tooltip>
      {/* <Tooltip title="Experience">
        <Grid id="expGrid" item xs={3} className="py-3">
          <NavLink to="/experience" className="col s3 center-align amarantFont">
            <DeveloperBoardIcon className="navIcon" />
          </NavLink>
        </Grid>
      </Tooltip>
      <Tooltip title="Personal Skills">
        <Grid id="psGrid" item xs={3} className="py-3">
          <NavLink
            to="/personalskills"
            className="col s3 center-align amarantFont"
          >
            <EmojiPeopleIcon className="navIcon" />
          </NavLink>
        </Grid>
      </Tooltip> */}
    </Grid>
  );
};

export default Navbar;
