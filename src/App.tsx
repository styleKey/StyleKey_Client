import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/Header.tsx';
import Homepage from './pages/Homepage.tsx';
import RedirectPage from './components/loginpage/Redirect.tsx';
import Login from './pages/Login.tsx';
// import Mypage from './pages/MyPage/Mypage.tsx';
import ResultPage from './pages/ResultPage.tsx';

const CenteredContainer = styled.div`
  max-width: 390px; // 최대 가로 길이 (피그마에 있는 대로)
  min-width: 320px; // 최소 가로 길이 (아이폰 SE)
  height: 100vh;
  margin: 0 auto; // 가로 중앙 정렬
  position: relative;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <CenteredContainer>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              {/* <Route path="/mypage" element={<Mypage />}>
                <Route path="/mypage/history"></Route>
                <Route path="/mypage/favorite"></Route>
              </Route> */}
              <Route path="/oauth/redirect" element={<RedirectPage />} />
              <Route path="/test" />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/points">
                <Route path="/points/detail">
                  <Route path="/points/detail/cordinate" />
                </Route>
              </Route>
              <Route path="/brands">
                <Route path="/brands/detail" />
              </Route>
            </Routes>
          </BrowserRouter>
        </CenteredContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;
