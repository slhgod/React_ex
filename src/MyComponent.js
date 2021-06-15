import React, { Component } from "react";
import propsTypes from "prop-types";
import { render } from "@testing-library/react";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propsTypes = {
    name: propsTypes.string,
    favoriteNumber: propsTypes.number.isRequired,
  };

  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕, 내 이름은 {name}이야.
        <br />
        children 값은 {children}이야.
        <br />
        내가 좋아하는 숫자는 {favoriteNumber}이야
      </div>
    );
  }
}

export default MyComponent;
