import React from "react";
import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa";
import "./Nav.css";
import Container from "../reusable/Container";

const Nav = () => {
  return (
    <Container>
      <Link to={"/"} className="nav_link">
        <h3 className="nav_icon_cont">
          <span className="logo_span">
            <FaCameraRetro color="white" />
          </span>
          CAPTUR
        </h3>
      </Link>

      <div className="nav_link_items">
        <Link className="nav_link" to={"/"}>
          HOME
        </Link>
        <Link className="nav_link" to={"/about"}>
          ABOUT
        </Link>
        <Link className="nav_link" to={"/portfolio"}>
          PORTFOLIO
        </Link>
      </div>
    </Container>
  );
};

export default Nav;
