import React, { useState } from 'react'
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['강남 맛집 추천', '광화문 맛집 추천', '합정 맛집 추천']);
  let [따봉, 따봉변경] = useState(0);
  function post(no) {
    return (
      <div className="list">
        <h3> { 글제목[no] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h3>  
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    )
  }
  function 글제목바꾸기(no, title) {
    var newArray = [...글제목];
    newArray[no] = title;
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <br/>
      <button onClick={()=>{글제목바꾸기(0, '뉴욕 맛집 추천')}}>버튼</button>
      {post(0)}
      {post(1)}
      {post(2)}
      < Modal />

    </div>

  );
}

function Modal() {
  return (
  <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
