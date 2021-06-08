import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};

//   {
//     /* =================== JSX 내부 주석 ========================== */
//   }

// {
//   /* 클래스형 컴포넌트
//      render 함수 반드시 필요. 그 안에 보여 주어야 할 JSX를 반환
//   */
// }
// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

//   {
//     /* =================== JSX 내부 주석 ========================== */
//   }

// function App() {
//   // const name ='react';
//   {
//     /* JSX는 <></>의 부모값으로 감싸줘야 함 */
//   }
//   // return (
//   // <div>
//   //   { //조건부 연산자
//   //     name === 'react' ? (
//   //       <h1>리액트 입니다.</h1>
//   //     ) : (
//   //       <h1>리액트가 아닙니다.</h1>
//   //     )
//   //   }
//   // </div>
//   // );

//   // return <div>{name==='react'?<h1>리액트입니다.</h1>:null}</div>

//   {
//     /* JSX 여러줄은 ()로 감싸고 한줄은 감싸지 않는다. */
//   }
//   // return <div>{name==='react' && <h1>리액트입니다.</h1>}</div>

//   {
//     /* =================== JSX 내부 주석 ========================== */
//   }

//   // const name = undefined;
//   {
//     /* OR 연산자로 해당 값이 undefined 일때 사용할 값을 지정하면 오류 방지 */
//   }
//   // return name || '값이 undefined';

//   {
//     /* JSX 내부에서 undefined를 렌더링하는 것은 괜찮음 */
//   }
//   // return <div>{name}</div>

//   {
//     /* undefined일 때 보여 주고 싶은 문구가 있다면 다음과 같이 코드를 작성 */
//   }
//   // return <div>{name||'react'}</div>

//   {
//     /* ============================================================ */
//   }

//   // const name = '리액트';
//   {
//     /* style 객체를 미리 선언 */
//   }
//   // const style = {
//   //   backgroundColor: 'black',
//   //   color: 'aqua',
//   //   fontSize: '48px',
//   //   fontWeight: 'bold',
//   //   padding: 16
//   // }
//   // return <div style={style}>{name}</div>

//   {
//     /* style 값을 바로 지정 */
//   }
//   // return (
//   //   <div
//   //   style = {{
//   //     backgroundColor: 'black',
//   //     color: 'aqua',
//   //     fontSize: '48px',
//   //     fontWeight: 'bold',
//   //     padding: 16
//   //   }}>
//   //     {name}
//   //   </div>
//   // )

//   {
//     /* ============================================================ */
//   }
//   {
//     /* './App.css' import 하기 _ 적용안됨(?) 왜? */
//   }
//   const name = "css적용";
//   return <div className="react">{name}</div>;
// }

export default App;
