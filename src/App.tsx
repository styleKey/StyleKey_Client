import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/Header.tsx';
import LoginPage from './pages/Loginpage/Loginpage.tsx';
import Homepage from './pages/Homepage/Homepage.tsx';
import RedirectPage from './oauth/Redirect.tsx';
import Login from './components/loginpage/Login.tsx';

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
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/logintemp" element={<Login />}></Route>
              <Route path="/oauth/callback/*" element={<RedirectPage />} />
            </Routes>
          </BrowserRouter>
        </CenteredContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;
