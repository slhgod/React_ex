import React, { Fragment } from 'react'; 
import './App.css';

function App() {
  // const name ='react';
  // JSX는 <></>의 부모값으로 감싸줘야 함
  // return (
    // <div>
    //   { //조건부 연산자 
    //     name === 'react' ? (
    //       <h1>리액트 입니다.</h1>
    //     ) : (
    //       <h1>리액트가 아닙니다.</h1>
    //     )
    //   }
    // </div> 
    // );
    // return <div>{name==='react'?<h1>리액트입니다.</h1>:null}</div>
    // JSX 여러줄은 ()로 감싸고 한줄은 감싸지 않는다.
    // return <div>{name==='react' && <h1>리액트입니다.</h1>}</div>
// ==================================================================
    const name = undefined;
    //OR 연산자로 해당 값이 undefined 일때 사용할 값을 지정하면 오류 방지
    // return name || '값이 undefined';
    //JSX 내부에서 undefined를 렌더링하는 것은 괜찮음
    // return <div>{name}</div>
    // undefined일 때 보여 주고 싶은 문구가 있다면 다음과 같이 코드를 작성
    return <div>{name||'react'}</div>
// ===================================================================

}

export default App;
