import React, { Fragment } from 'react'; 


function App() {
  const name ='react';
  return (
    <div>
      { //조건부 연산자 
        name === 'react' ? (
          <h1>리액트 입니다.</h1>
        ) : (
          <h1>리액트가 아닙니다.</h1>
        )
      }
    </div>  
    );
}

export default App;
