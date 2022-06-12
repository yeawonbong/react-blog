import React, { useState } from 'react'
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['강남 맛집 추천', '광화문 맛집 추천', '합정 맛집 추천']);
  let [발행일, 발행일변경] = useState(['2월 17일', '2월 17일', '2월 17일'])
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(-1);
  let [input, setInput] = useState('');

  function 따봉더하기(no) {
	var newArray = [...따봉];
	newArray[no] = 따봉[no] + 1;
	따봉변경(newArray);
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
	{
		글제목.map(function(title, i) {
			return (
				<div className="list">
				  <h3 onClick={()=>{modal === i ? setModal(-1) : setModal(i)}}> 
					  { title } 
				  </h3>  
				  <span onClick={ ()=>{ 따봉더하기(i) } }>👍</span> { 따봉[i] } 
				  <p>{발행일[i]} 발행</p>
				  <button onClick={()=>{
					  let temparr = [...글제목];
					  temparr.splice(i,1);
					  글제목변경(temparr);
					  }}>삭제</button>
				  <hr/>
				</div>
			  )
			}
			)
		}

		<input type="text" onChange={(e)=>{
			setInput(e.target.value); 
			console.log(input)
		}}/>
		<button onClick={()=>{
			if (input !== '') {
				글제목변경([input, ...글제목]); 
				발행일변경([`${new Date().getMonth()+1}월 ${new Date().getDate()}일`, ...발행일])
				따봉변경([0, ...따봉])
			}
			else
			alert('내용을 입력해주세요.')
		}}>발행</button>
		<Profile/>
		{//JS로 조건식을 쓴다
		  modal >= 0 ? <Modal 글제목={글제목} no={modal} 글제목바꾸기={글제목바꾸기}/> : null
		}
	</div>

  );
}

function Modal(props) {
  return (
  <div className='modal'>
	<h2>{props.글제목[props.no]}</h2>
	<p>날짜</p>
	<p>상세내용</p>
	<button onClick={()=>{props.글제목바꾸기(props.no, '뉴욕 맛집 추천')}}>글수정</button>
  </div>
  )
}

class Profile extends React.Component { //옛날 React
	constructor() {
		super();
		this.state = { name: 'Kim', age : 30 } //state 선언은 이렇게 
	}

	changeName(){
		this.setState({name: 'Park'})
	}
	render() {
		return (
			<div>
				<h3>프로필입니다</h3>
				<p>저는 { this.state.name } 입니다.</p>
				<button onClick={ this.changeName.bind(this) }>버튼</button>
			</div>
		)
	}
}

export default App;
