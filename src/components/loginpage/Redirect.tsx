import { useStore } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RedirectPage = () => {
  const { login } = useStore();
  const navigate = useNavigate();

  function getQueryParameter(param: string) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const accessToken = getQueryParameter('token');

  useEffect(() => {
    if (accessToken !== null) {
      localStorage.setItem('accessToken', accessToken);
      login();
      setTimeout(() => {
        navigate('/');
      }, 100);
    }
  }, [accessToken, login, navigate]);

  return <div>인증 중입니다. 잠시만 기다려 주세요...</div>;
};

export default RedirectPage;
