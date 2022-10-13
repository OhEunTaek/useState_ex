import { useState } from 'react';


function App() {
	let they = ["장영실", "장보고"];
	const [name, setName] = useState(they);
	const [input, setInput] = useState("");

	function insertInput(e) {
		setInput(e.target.value);
		console.log(input);
	}
	function setUpload() {
		setName((prevState) => {
			console.log('prevState: ', prevState);
			return [...prevState, input];
		});
	};

	return (
		<div>
			<input type="text" value={input} onChange={insertInput} />
			<button onClick={setUpload}>Upload</button>
			{name.map((data, index) => {
				return <p key={index}>{data}</p>
			})}
		</div>
	);
}

export default App;

/*
function App() {
	return (
		<div>
			<span>현재 시각 : 1시</span>
			<button>Update</button>
		</div>
	);
}
버튼을 누르면 시간이 올라가게하겠다
---------------------------------

import { useState } from 'react'
function App() {
	const [time, setTime] = useState(1);
	return (
		<div>
			<span>현재 시각 : 1시</span>
			<button>Update</button>
		</div>
	);
}
유즈스테이트를 임포트하고 불러온뒤 초기값과 각 변수이름을 지정
---------------------------------------
import { useState } from 'react';
function App() {
	const [time, setTime] = useState(1);
	return (
		<div>
			<span>현재 시각 : {time}시</span>
			<button>Update</button>
		</div>
	);
}
결과값을 시간에 변수로 넣어줌 브라우저상에 변화는 없으나 1 은 time의 값 즉 지금은 초기값
----------------------------
function App() {
	const [time, setTime] = useState(1);

	function UpTime() {
		setTime(time + 1)
	}
	//const UpTime = ()=>{}

	return (
		<div>
			<span>현재 시각 : {time}시</span>
			<button onClick={ UpTime }>Update</button>
		</div>
	);
}
셋타임이라는 함수안에 변화시킬 값을 지정, 이제 셋타임을 불러올 수록 타임에는 1이 더해짐 
이렇게 셋타임의 함수로 변화된 값은 브라우저를 리렌더링해서 화면에 보여주게됨

시계답게 시간이 12시를 넘으면 13이 아닌 1로 바뀌도록 코딩해보자 - 실습시간

function App() {
	const [time, setTime] = useState(1);

	function UpTime() {

		조건문이 이자리에 오면될것
		let realTime;
		if(time >= 12){
			realTime = 1;
		} else{
			realTime = time +1;
		}


		setTime(time + 1)
	}
	//const UpTime = ()=>{}

	return (
		<div>
			<span>현재 시각 : {time}시</span>
			<button onClick={ UpTime }>Update</button>
		</div>
	);
}

*/

/*
function App() {
	return (
		<div>
			<input type="text" />
			<button>Upload</button>
		</div>
	);
}
텍스트 박스와 버튼 쓰고 버튼누르면 밑으로 해당값이 밑으로 내려가는 그런것


function App() {
	let they = ["장영실", "장보고"];
	const [name, setName] = useState(they)
	return (
		<div>
			<input type="text" />
			<button>Upload</button>
			{name.map((data, index) => {
				return <p key={index}>{data}</p>
			})}
		</div>
	);
} 유즈스테이트를 사용하여 초기값에 배열로 they를 넣고 
반환되는 배열에 반복을 돌며 하나하나 p태그로 내보내도록하는데 이렇게 복제되는 값들은 고유 키값이 존재해야하므로 키값으로 인덱스를 사용
각 요소의 데이트값을 피태그 안에 넣기

function App() {
	let they = ["장영실", "장보고"];
	const [name, setName] = useState(they);
	const [input,setInput] = useState(""); <---
	return (
		<div>
			<input type="text" value={input}/> <---
			<button>Upload</button>
			{name.map((data, index) => {
				return <p key={index}>{data}</p>
			})}
		</div>
	);
}

인풋태그에 넣은 값을 트래킹할 유즈스테이트를 만들고 초기값은 비워두었다
인풋태그에 밸류 속성을 스테이트로 반환된 값으로 지정함

function App() {
	let they = ["장영실", "장보고"];
	const [name, setName] = useState(they);
	const [input, setInput] = useState("");

	function insertInput(e){
		setInput(e.target.value);
	} 
	console.log(input); 

	return (
		<div>
			<input type="text" value={input} onChange={insertInput}/>
			<button>Upload</button>
			{name.map((data, index) => {
				return <p key={index}>{data}</p>
			})}
		</div>
	);
}
인풋태그에 밸류값이 변경되면(현재 초기값으로 비어있음 - 사용자가 작성한다면 변화가 일어나므로 이 해당 내용을 setInput함수에 적용하도록 해야됨)
insertInput함수를 만들어서 이벤트가발생하는 타겟 즉 인풋태그에 값이 onchange되면 해당 밸류값을 변화값으로 셋인풋함수가 해당 input의 값을 변화시킴 즉 빈문자열에서 작성된 값으로 변화됨

자 마지막 업로드 시키는것만 남았다 input에 우리가 올려줄 데이터를 담았으니 버튼을 누르면 업로드를 해주면되겠다
function App() {
	let they = ["장영실", "장보고"];
	const [name, setName] = useState(they);
	const [input, setInput] = useState("");

	function insertInput(e) {
		setInput(e.target.value);
	}
	function setUpload() {<-------------------------------
		setName((prevState) => {
			console.log('prevState: ', prevState);<---------------------------
			return [...prevState, input];
		});
	};

	return (
		<div>
			<input type="text" value={input} onChange={insertInput} />
			<button onClick={setUpload}>Upload</button>
			{name.map((data, index) => {
				return <p key={index}>{data}</p>
			})}
		</div>
	);
}
버튼에 온클릭이벤트를 부여하고 적용할 함수를 만든다 셋업로드 함수에는 위애 유즈스테이트로 만든 셋네임이라는 함수를 사용하는데
그냥사용하는게아니다
리액트는 이전의 것과 지금의것 즉 바뀐내용과 비교를 해야되므로 
콜백함수를 넣어주고
프리스테이트라는 개념 즉 이전 상태를 불러온뒤 리턴값으로 이전상태의 배열을 복제해 현재 변화된 인풋을 합쳐 반환하고 이것을 최종 랜더링한다

여기 내용 즉 프리스테이트라는 개념도 좀 어려운 개념이지만 사실 지금 작업은 매우 비효율적인 작업이다 왜냐하면 글자하나하나 입력마다 랜더링이 일어나는 구조이기 때문이다
만약 이 작업이 엄청 오래걸리는 작업이면 어마어마한 일이 일어날것 따라서 처음 로딩시 값을 불러오는것이 아니라 콜백형태로 초기값을 불러다 준다면 맨처름 랜더링 될때만 함수가 불려진다
*/