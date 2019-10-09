import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export default class Menu extends Component {
  state = {
    open: true
  };
  getOpenMenu = () => {
    this.setState({ open: !this.state.open });
    console.log("idemoo");
  };
  setOpenMenu = () => {
    let style = this.state.open ? "menu" : "menu open";
    return style;
  };
  render() {
    return (
      <div className={this.setOpenMenu()} onClick={this.getOpenMenu}>
        <div className="menuButton">
          <div className="menu-button" />
        </div>
        <div className="links">
          {menuOptions.map((option, index) => {
            return (
              <div className="link-div" key={index}>
                <Link to={option.route}>{option.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const menuOptions = [
  { route: "/", title: "Home" },
  { route: "/aboutMe", title: "About me" },
  { route: "/portfolio", title: "Portfolio" },
  { route: "/news", title: "News" },
  { route: "/contact", title: "Contact" }
];
