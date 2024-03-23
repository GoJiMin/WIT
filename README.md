# WIT(What Should I Read Today)
<p align="center">
  <img width="100%" alt="Frame 205" src="https://github.com/GoJiMin/WIT/assets/112407281/69cef939-6e50-4edc-b696-4e1d7501d03b">
</p>
  
<br />

## 프로젝트 소개 📝

### 키워드를 이용한 손쉬운 도서 검색

사용자에게 키워드를 제공해 선택한 키워드에 맞게 도서를 추천해줘요.
혹은, 사용자가 직접 키워드를 이용해 도서를 검색할 수 있어요.
사용자는 해당 도서를 '나의 서재'에 북마크할 수 있고, 소장 중인 도서관을 검색할 수 있어요.

### 프로젝트를 시작하게 된 배경

대학 시절 교양 책을 사기엔 뭔가 돈이 아까웠던 저는 도서관에서 책을 빌리고자 했어요.
학교 도서관의 경우 경쟁률이 치열해 지역 도서관을 이용하고자 했어요.
그런데.. 도서관에 이 책이 과연 있는지 찾아보는 과정이 복잡하고 어려워 기획하게 됐어요.

### 프로젝트의 핵심 가치

사실 이 프로젝트의 핵심 가치는 사용자가 쉽게 도서를 추천 받고 지역 도서관을 이용 시켜 지역 도서관의 활성화도 바라고 있어요.

<br />

## 팀원 👨‍👨‍👧‍👧👩‍👦‍👦

|<img src="https://avatars.githubusercontent.com/u/112407281?v=4" width="150" height="150"/>|
|:-:|
|FrontEnd|
|Prolip<br/>[@GoJiMin](https://github.com/GoJiMin)|

<br />

## 기술 스택 ⚙️

### 백엔드

![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)

### 프론트엔드

![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![reactquery](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 인프라

![git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)
![github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


<br />

## 주요 기능 소개 🖥️

### 키워드를 선택해 도서를 추천 받아요.

**키워드를 선택하면 해당 키워드의 베스트 셀러 목록을 사용자에게 표시해요.**
- 추천 기능의 경우 한 페이에 10개의 항목만 보여주며 다시 추천 받을래요 버튼을 클릭해 추천 목록을 변경할 수 있어요.
  
![recommendation.gif](https://github.com/GoJiMin/WIT/assets/112407281/769ee6fa-22d1-414f-b112-39d1bb2e0658)
<br />


**키워드를 입력해 직접 검색하는 기능도 지원해요.**
- 직접 검색의 경우 페이지네이션 기능을 이용해 사용자에게 표시하고 있어요.
- 이 과정에서 데이터를 받아올 때 queryKey에 pageNumber를 입력하고, prefetchQuery를 이용해 다음 페이지를 미리 로드하고 있어요.
- 또한 keepPreviousData를 사용해 다시 사용자가 이전 페이지로 넘어올 때 캐시된 데이터를 제공해 끊김 없는 페이지네이션을 제공해요.
  
![directSearch.gif](https://github.com/GoJiMin/WIT/assets/112407281/6a4cd063-82ef-423f-8742-f892dcc2ba81)

<br />


### 북마크 기능을 이용해 '나의 서재'에 마음에 드는 도서를 추가할 수 있어요.

마음에 드는 도서는 하트를 클릭해 북마크할 수 있어요.
하지만 로그인하지 않은 사용자는 이용할 수 없어요.

로그인은 firebase/auth를 이용해 구글 로그인을 지원하고 있어요.
북마크 되는 도서는 firebase의 데이터베이스에 저장돼요.

![bookmark.gif](https://github.com/GoJiMin/WIT/assets/112407281/908e7b7a-de0b-406b-a14a-f5a3ca5552dd)

<br />

### 원하는 도서는 소장 도서관을 검색할 수 있어요.

도서관 정보나루의 API를 이용해 도서의 isbn 정보와 지역 코드를 전송해 해당 지역에 소장 중인 모든 도서관을 조회해요.
만약 소장 중인 도서관이 존재한다면 카카오 맵 api를 이용해 해당 지역을 사용자에게 표시해요.

![inquiryLibrary.gif](https://github.com/GoJiMin/WIT/assets/112407281/b46c0410-b0e3-4e74-b11f-47bed4fc8de1)

<br />
