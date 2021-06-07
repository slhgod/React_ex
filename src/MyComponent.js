import { render } from "@testing-library/react";
import React from "react";

// const MyComponent = () => {
//   //화살표 함수. 함수를 파라미터로 전달할 때 유용
//   //일반함수는 자신이 종속된 객체를 this로 가리키며,
//   //화살표 함수는 자신이 종속된 인스턴스를 가리킴
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

const MyComponent = (props) => {
  return <div>안녕, 내 이름은 {props.name}이야.</div>;
};

export default MyComponent;
