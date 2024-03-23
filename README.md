## 📖 목차
### [1. 프론트엔드 개발 목표](#-프론트엔드-개발-목표)
### [2. 기술 스택](#-기술-스택)
### [3. 구현 기능](#-구현-기능)
### [4. 최적화](#️-최적화)
### [5. Trouble Shooting](#-trouble-shooting)

<br>

## 🚀 프론트엔드 개발 목표

### 1. 사용자의 UI/UX 경험 극대화 (유동적인 UI / 자연스러운 UX)
### 2. 상태관리 (클라이언트에는 Zustand를, 서버와는 Tanstack을)
<br>

## 📚 기술 스택

![icons8-typescript-96](https://github.com/styleKey/StyleKey_Client/assets/116702892/37528348-e3dd-4b25-8924-9ddbbfe84dd9) 타입스크립트

![icons8-react-a-javascript-library-for-building-user-interfaces-96](https://github.com/styleKey/StyleKey_Client/assets/116702892/64e01064-e02e-4365-a060-4cfc5a13f3da) 리액트

<br>

## 🖥 구현 기능

### 1. 소셜 로그인 (구글/카카오)
- axiosInterceptor가 accessToken이 만료되었을 때 401오류를 클라이언트 단에서 가로채어 <br> refreshToken을 통해 accessToken을 최신화 하는 로직을 작성하였습니다.

### 2. 홈페이지 이미지 슬라이더 및 자동 스크롤
<table>
  <tr>
    <td>
      <img src="https://github.com/styleKey/StyleKey_Client/assets/116702892/540240b7-e4cc-49c8-b788-822d06ecb963/" width="200" height="400">
    </td>
    <td>
      - 이미지 슬라이더에는 swiper 라이브러리를 사용하여<br> 3D 슬라이더를 구현했습니다.
      <br>
      <br>
      - 하단 버튼은 사용자가 스크롤 하지 않아도 <br>클릭만으로 페이지 이동이 가능하게 구현했습니다.
    </td>
  </tr>
</table>

### 3. 추가예정

<br>

## ⚡️ 최적화
### 1. 테스트 페이지
- Tanstack 쿼리의 캐시 저장 장점을 활용하여 서버 과부화를 방지하였습니다.
- 처음 데이터를 받아온 후 10분 동안 동일한 요청에 대해서는 캐시에 저장된 데이터를 쓰게 됩니다.
- 질문지와 선택지가 유동적으로 바뀌지 않기 때문에 staleTime과 gcTime을 10분으로 설정하였습니다.
  
 ```js
  const queryResult = useQuery({
    queryKey: ['testinfo'],
    queryFn: requestGet,
    staleTime: 600000, //테스트 문제 받아오는 건 처음만 받아오고 10분 동안은 안 받아오게 설정
    gcTime: 600000, //캐시에도 10분동안 남아있도록 설정
  });
  return queryResult;
  ```
- 이미지가 텍스트 보다 느리게 렌더링 되는 문제는 이미지를 미리 캐시에 저장하는 방식으로 해결하였습니다.
  ```js
  useEffect(() => {
  if (questions && currentQuestionIndex < questions.length - 1) {
  const nextQuestionImage = new Image();
  nextQuestionImage.src = questions[currentQuestionIndex + 1].image_url;
  }
  }, [currentQuestionIndex, questions]);
  ```

### 2. 좋아요 기능
- 사용자가 여러번 좋아요를 클릭할 경우, 서버에 계속된 요청으로 과부하를 일으킬 수 있습니다.<br>따라서 해당 문제는 사용자가 페이지를 벗어날 때만 백엔드에 요청을 보내는 식으로 해결하였습니다.

<br>

## 📝 Trouble Shooting

<br>

## 프로젝트 인수인계 (24년 4월 기준)

### 1. 홈페이지
- 홈페이지의 HomeContainer는 홈페이지 이미지 슬라이더와 테스트 시작 버튼, 스크롤 버튼을 무조건 한 화면에 보여주기 위해(감싸주는) 선언한 컴포넌트 입니다. 따라서 100vh의 height를 가지고 있습니다.

- Slide 컴포넌트는 이미지 슬라이더용 컴포넌트 입니다. 기기마다 크기가 다를 때, 이미지가 항상 동일한 비율로 줄거나 커지기 위해서 세로와 가로 길이를 vh 기준으로 설정했습니다. (모바일 기기는 가로보다는 세로의 영향을 많이 받기 때문)

- HomeBottom에 div로 더미 데이터가 들어가 있는 부분은 지우시고 나중에 디자이너 분께서 온보딩 페이지 디자인이 완료가 되면 해당 부분에 구현해주시면 됩니다.

### 2. 로그인 페이지
- GoogleLogin.tsx에는 백엔드의 서버 url과 리다이렉트 url이 적혀져 있는 변수가 있습니다. 현재 글을 쓰는 시점에서는 백엔드 코드에 문제가 있어서 작동이 안되니, 추후 백엔드 구현이 완료되면 다시 확인하시길 바랍니다.

- Redirect.tsx 파일은 백엔드에서 리다이렉트 url로 클라이언트를 보내줬을때 확인하려는 페이지 입니다. 해당 페이지 내에서 Header에 있는 accessToken과 쿠키에 담겨있는 RefreshToken을 받아오시면 됩니다.

- accessToken의 경우, 보통 로컬 스토리지에 저장하는데 그렇게 되면 XSS 공격에 취약한 특징이 있습니다. 하지만 작은 프로젝트이다보니 굳이 신경쓸 필요는 없을 것 같아서 알아서 구현해주시면 됩니다.

- RefreshToken의 경우에는 백엔드에 HttpOnly 플래그 및 SameSite 설정을 해달라고 말씀해주시면 됩니다. 이는 XSS 및 CSRF 공격을 막기 위함입니다.

### 3. 테스트 시작 페이지
- 시작페이지에서 첫번째 문제의 이미지를 캐시에 저장하는 코드가 지금 작동이 안되는 것 같습니다. 테스트 시작할 때 UI/UX 경험을 올리기 위한 방법이니 꼭 해당 방법을 사용해주셨으면 좋겠습니다.

- 시작 페이지도 한눈에 화면이 모두 보이도록 vh로 설정하였습니다.

### 4. 테스트 페이지
- viewport가 작으면 화면이 잘리는 경우가 있지만, 이 부분은 그냥 감안하고 넘어가기로 디자이너 분과 말씀나눴습니다.

- 코드를 보시면, 사용자가 이미 선택한 답안 수정 로직도 제대로 구현이 되어있어서 해당 페이지는 별로 신경쓰실 부분은 없을겁니다.

### 5. 테스트 결과 페이지
- 이 글을 쓰는 시점에 백엔드 api가 완성이 된 상태가 아니었습니다.

- 추가적으로 필요한 데이터는 api가 완성되면 구현해주시면 됩니다. 현재 구현된 부분에서는 딱히 api 통신 관련해서 특이사항은 없습니다.

- 스타일 포인트 별로 텍스트 하이라이트 된 부분 색상 변경이 필요합니다. 지금은 디폴트 색으로 회색 하이라이트가 되어있습니다.

### 추가. 상태관리
- UI(로그인 유무 아이콘) 상태관리는 현재 zustand로 구현된 상태입니다. 보통 Redux-toolkit을 많이 사용한다고는 하지만, 프로젝트 크기가 크지 않기 때문에 비교적 가볍고 상태관리 코드 구현이 쉬운 zustand로 구현했습니다.

- 서버 통신 상태관리는 Tanstack 쿼리를 사용했습니다. 테스트 페이지 코드를 자세히 살펴보시면 staleTime과 gcTime을 설정해서 사용자가 테스트 페이지로 다시 돌아가도 6분이 넘은 시점이 아니면 서버에 요청 보내지 않게 최적화한 상태입니다.

<br/>
<img src="https://media.giphy.com/media/igPDtkfSJZMFwE0LP8/giphy.gif" width="80" />

### 인수인계 코드 설명과 관련해서 문의사항이 있으시면  jin04007@naver.com으로 연락주시면 감사하겠습니다.

