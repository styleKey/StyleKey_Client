import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/Header.tsx';
import HomePage from './pages/Homepage/Homepage.tsx';
import LoginPage from './pages/Loginpage/Loginpage.tsx';
import Homepage from './pages/Homepage/Homepage.tsx';

const CenteredContainer = styled.div`
  max-width: 390px; // 최대 가로 길이 (피그마에 있는 대로)
  min-width: 320px; // 최소 가로 길이 (아이폰 SE)
  heigth: 100vh;
  margin: 0 auto; // 가로 중앙 정렬

  position: relative;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <CenteredContainer>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </BrowserRouter>
      </CenteredContainer>
    </>
  );
}

export default App;
