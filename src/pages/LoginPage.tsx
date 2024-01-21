import '../App.css';
import React, {useContext, useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom";
import DashboardPage from "./DashboardPage";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = '/api/v1/auth/authenticate';

const LoginPage = () => {
  // @ts-ignore
  const {setAuthToken} = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMessage('');
  }, [email, password]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({email, password}),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
      );
      const accessToken = response?.data?.token;
      setAuthToken({accessToken});
      const firstname = response?.data?.firstname;
      const lastname = response?.data?.lastname;
      localStorage.setItem('token', accessToken);
      localStorage.setItem('firstname', firstname);
      localStorage.setItem('lastname', lastname);
      setEmail('');
      setPassword('');
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMessage('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMessage('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMessage('Unauthorized');
      } else {
        setErrMessage('Login Failed!');
      }
      // @ts-ignore
      errRef.current.focus();
    }
  }

  return (
      <>
        {success ? (
            <DashboardPage/>
        ) : (
            <div className={'login template d-flex justify-content-center align-items-center'}>
              <div className={'form_container p-5'}>
                <form onSubmit={handleSubmit}>
                  <h3 className={'text-center'}>Sign In</h3>
                  <div className={'mb-2'}>
                    <label htmlFor={'email'}>Email</label>
                    <input
                        type={'email'}
                        placeholder={'email'}
                        className={'form-control'}
                        id={'email'}
                        ref={userRef}
                        autoComplete={'off'}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                  </div>
                  <div className={'mb-2'}>
                    <label htmlFor={'password'}>Password</label>
                    <input
                        type={'password'}
                        placeholder={'password'}
                        className={'form-control'}
                        id={'password'}
                        ref={userRef}
                        autoComplete={'off'}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                  </div>
                  <div className={'d-grid'}>
                    <button className={'btn btn-primary'}>Sign in</button>
                  </div>
                  <p className={'text-end mt-2'}>
                    Don't have an account yet?<Link to={'/signup'} className={'ms-2'}>Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
        )}
      </>
  );
}

export default LoginPage;
