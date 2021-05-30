import React, { useState } from 'react';
import '../styles/login.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveLoginInfo } from '../redux/login';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // save login info - dispatch action
    // and redirect to homepage
    dispatch(saveLoginInfo(username, password));
    history.push('/');
  };

  const saveInput = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className='loginBody'>
      <form className='box'>
        <h1 className='header'>Wellcome to NBA</h1>

        <input
          type='text'
          name='username'
          value={username}
          onChange={saveInput}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              login();
            }
          }}
        ></input>
        {/* <input
          type='text'
          name='password'
          value={password}
          onChange={saveInput}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              login();
            }
          }}
        ></input> */}
        <button className='subButton' onClick={login}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
