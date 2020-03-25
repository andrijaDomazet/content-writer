import React, { Component } from "react";
import "./Home.scss";
import Menu from "../../components/Menu/Menu";
import Backdrop from "../../components/Backdrop/Backdrop";
import Carousel from "../../components/Carousel/Carousel";

export default class Home extends Component {
  state = {
    menu: false,
    showMenu: false,
    currentNumber: 0
  };
  componentDidMount = () => {
    let intervalId = setInterval(this.carouselNumber, 15000);
    this.setState({ intervalId: intervalId });
  };
  setShowMenu = () =>
    this.setState({ showMenu: !this.state.showMenu, menu: !this.state.menu });

  carouselNumber = () => {
    if (this.state.currentNumber === 2) {
      return this.setState({ currentNumber: 0 });
    }
    this.setState({ currentNumber: this.state.currentNumber + 1 });
  };
  render() {
    return (
      <div className="home">
        <Carousel showingNumber={this.state.currentNumber} />
        <Menu show={this.state.menu} clicked={this.setShowMenu} />
        <Backdrop clicked={this.setShowMenu} show={this.state.showMenu} />
        <div className="authors__data">
          <h3>Jane Dauson</h3>
          <p>content creator / writer</p>
        </div>

        <div className="social__networks">
          <a href={""}>fb</a>
          <a href={""}>in</a>
          <a href={""}>tw</a>
        </div>
      </div>
    );
  }
}
