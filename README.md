## 📖 목차
### 1. 프론트엔드 개발 목표
### 2. 기술 스택
### 3. 구현 기능
### 4. 최적화
### 5. Trouble Shooting

<br>

## 🚀 프론트엔드 개발 목표

### 1. 사용자의 UI/UX 경험 극대화 (반응형 UI / 기억에 남는 UX)
### 2. 상태관리 (클라이언트에는 Redux를, 서버와는 Tanstack을)
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
    if (questions && currentQuestionIndex < questions.length - 1) { //현재 문제의 뒷 문제의 이미지를 미리 캐싱
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

