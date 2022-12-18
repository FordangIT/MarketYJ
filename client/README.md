## Market
당근마켓을 클론한 웹 애플리케이션입니다. 

## Features 

## Contributors
- fe: 이유정
- be: 이유정
## 개발일지
### 2022.12.14 수요일 
crud 기능을 하는 마켓을 구현해볼 예정이다. 
이게 성공하면 차례로 더 구현해보자. 
=> 회원가입, 로그인, 인증 
=> 댓글, 카테고리 설정(crud추가)
=> 검색
=> 지도, 동영상(외부 api 연동)

오늘 한 것: react설치, express 설치했다. 
어려웠던 점: express 설치도 생소했다. `https://velog.io/@kimhyo_0218/Node.js-express.js-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0` 여기서 참고했다.
오늘 알게된 점 : client 폴더와 server 폴더를 따로 만들어준것. 각각 react 설치, express 설치를 해줬다. 
회고: 오늘은 일단 이정도만 !!! 

### 2022.12.16 금요일 
오늘 한 것 : client에 redux 설치, styled component 설치, React에서 ESlint를 사용할 수 있게 돕는 관련 플러그인을 설치
문제: git push가 안돼서 git pull로 원격에 있는 파일들을 내 로컬에 있는것과 동기화 해줘서 다시 push를 해줘야 한다. 
해결: 여러 방식을 써봤는데 안됐다. 일단 지금 프로젝트는 나 혼자니까 --force로 강제로 해줬다... 담에 다시 해보자 ! 

내가 생각해야 할 것들 
redux, styled-component & BEM , fetch는 Axios이용, 번들러 webpack 써볼까? 

오늘 한 것: github의 issue, milestone, project 생성
//TODO: 여러개의 issue와 milestone을 만들어보자. 이걸 project와 연결하고 ! 
//PLACE:  유어클래스 섹션 5 unit2 chapter1-2 튜토리얼 2에 안내 되어있음

### 2022.12.17 토요일 
오늘 할 것: js를 이용해 프론트와 함께 백엔드를 구축하여 서버-클라이언트를 모두 개발할 수 있는 Express.js  웹 프레임워크를 react + express 연동해보자. 

### 2022.12.18 일요일 
#### 목표
1) 어제 못한 express 다시 해보자 
server로 데이터 불러오기 못하고 있음 
=> 직접 주소 쳐서 들어갔더니 서버 불러오고 있음 ㅇㅇ http://localhost:5000/
2) redux toolit, 라우터, express로 crud 기능 먼저 넣자. 
=> npm install react-router-dom 했음 
=> react-router-dom 이용해서, pages Main과 Contains SPA 구현했음 

=> npm install @reduxjs/toolkit react-redux
=> npm install axios

2) 기본적인 틀 다 짜고 
3) crud 기능 
#### 결과 

1) 일단 eslint, prettier에 맞게 형식을 고쳐줬음 
의문 : 내가 다 수동으로 바꾸고 있는데 이게 자동으로 되어야 하는거 아닌가? 
2) 라우터 기능 
=> pages Main 과 Contains 로 나눠줬음 
3) 리덕스 툴킷 
=> 전역 상태관리를 활용해서 
=> axios를 이용해서 
=> crud (실패함)

#### 회고 
어떻게 express를 이용해서 데이터를 가져와야 하는지 감이 안온다. 그래도 일단, 오늘 라우터 기능 깔아놓고, 리덕스 툴킷이용해서 상태를 깔려고 했다. crud는 일단 기능을 하지 않아서 내일은, crud 기능이 되게 만들어줘야겠다. 
