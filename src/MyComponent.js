import React from "react";
import propsTypes from "prop-types";

const MyComponent = (props) => {
  const { name, children, favoriteNumber } = props;
  return (
    <div>
      안녕, 내 이름은 {name}이야.
      <br />
      children 값은 {children}이야.
      <br />
      내가 좋아하는 숫자는 {favoriteNumber}야
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propsTypes = {
  name: propsTypes.string,
  favoriteNumber: propsTypes.number.isRequired,
};

export default MyComponent;
