import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  function getQueryParameter(param: string) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const accessToken = getQueryParameter('token');

  if (accessToken !== null) {
    localStorage.setItem('accessToken', accessToken);
    loginHandler();
    setTimeout(() => {
      navigate('/');
    }, 100);
  }

  return <div>인증 중입니다. 잠시만 기다려 주세요...</div>;
};

export default RedirectPage;
