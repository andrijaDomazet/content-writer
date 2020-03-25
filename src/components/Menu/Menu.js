import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
// import Backdrop from "../Backdrop/Backdrop";

export default class Menu extends Component {
  state = {
    open: false
  };
  getOpenMenu = () => {
    this.setState({ open: !this.state.open });
  };
  setClassMenu = () => {
    return this.props.show ? "menu open" : "menu";
  };

  render() {
    return (
      <div className={this.setClassMenu()} onClick={this.props.clicked}>
        <div className="menu__button">
          <div className="menu-button" />
        </div>
        <div className="menuBackground">
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
