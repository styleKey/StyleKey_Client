# StyleKey

<p align="center">
  <br>
  <img src="./images/common/logo-sample.jpeg">
  <br>
</p>

## :closed_book:목차

[1.프로젝트 소개](#프로젝트-소개)

[2.기술 스택](#기술-스택)

[3.구현 기능](#구현-기능)

[4.Trouble Shooting](#Trouble-Shooting)

<br>

## 프로젝트 소개

<p align="justify">
프로젝트 개요/동기
</p>

<p align="center">
GIF Images
</p>

<br>

## 기술 스택

| JavaScript | TypeScript |  React   |
| :--------: | :--------: | :------: |
|   ![js]    |   ![ts]    | ![react] |

<br>

## 구현 기능

### 기능 1
- 로그인 기능
  - 인증 상태의 경우, 사용자가 로그인 했는지의 여부에 대한 답은 여러 컴포넌트와 관련이 있기 때문에 redux를 사용하였다.
  - 로그인 전 (테스트 실행, 테스트 결과 확인 (스타일포인트 설명만))
  - 로그인 후 (테스트 결과 저장, 해당 스타일포인트에 대한 코디룩, 아이템 추천 확인)
    
 

### 기능 2

### 기능 3

### 기능 4

<br>

## Trouble Shooting

### CSS 관련

<p align="justify">

- 컴포넌트가 3개 있다면, 토스처럼 컴포넌트 2개는 항상 유저가 확인하고 나머지 컴포넌트는 스크롤해서 볼 수 있는 방법을 몰랐다.
  그래서 일단은 viewport를 생각해서 컴포넌트 2개의 vh를 기기별로 확인하면서 맞춰봤는데, 아이폰 4같은 기종에서는 화면이 뭉개지는 현상이 있다.
  
  ```js
  export const HomeTop = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  height: 65vh;
  `

</p>

- 토스 온보딩 페이지
![image](https://github.com/styleKey/StyleKey_Client/assets/116702892/f2ec7a45-8ce9-4039-bfe4-5aae22662a73)


- 스크롤 하기 전 화면
![image](https://github.com/styleKey/StyleKey_Client/assets/116702892/eec6fb78-d99b-47d0-ad01-c8b2ecbe84c1)

- 스크롤 하고 난 화면
![image](https://github.com/styleKey/StyleKey_Client/assets/116702892/5a7166b0-6277-4469-9858-13e6aef5c4f6)
<br>

<!-- Stack Icon Refernces -->

[js]: ./src/images/stack/javascript.svg
[ts]: ./src/images/stack/typescript.svg
[react]: ./src/images/stack/react.svg
