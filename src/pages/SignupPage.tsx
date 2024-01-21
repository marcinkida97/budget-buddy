import '../App.css';
import {Link} from "react-router-dom";
import React, {useContext, useEffect, useRef, useState} from "react";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
import LoginPage from "./LoginPage";

const LOGIN_URL = '/api/v1/auth/register';

const SignupPage = () => {
  // @ts-ignore
  const {setAuthToken} = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMessage('');
  }, [firstname, lastname, email, password]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({firstname, lastname, email, password}),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
      );
      const accessToken = response?.data?.token;
      setAuthToken({accessToken});
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMessage('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMessage('Missing something');
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
          <LoginPage/>
      ) : (
          <div className={'signup template d-flex justify-content-center align-items-center'}>
            <div className={'form_container p-5'}>
              <form onSubmit={handleSubmit}>
                <h3 className={'text-center'}>Sign In</h3>
                <div className={'mb-2'}>
                  <label htmlFor={'fname'}>First name</label>
                  <input
                      type={'text'}
                      placeholder={'firstname'}
                      className={'form-control'}
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className={'mb-2'}>
                  <label htmlFor={'lname'}>Last name</label>
                  <input
                      type={'text'}
                      placeholder={'lastname'}
                      className={'form-control'}
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className={'mb-2'}>
                  <label htmlFor={'email'}>Email</label>
                  <input
                      type={'email'}
                      placeholder={'email'}
                      className={'form-control'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={'mb-2'}>
                  <label htmlFor={'password'}>Password</label>
                  <input
                      type={'password'}
                      placeholder={'password'}
                      className={'form-control'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={'d-grid'}>
                  <button className={'btn btn-primary'}>Sign up</button>
                </div>
                <p className={'text-end mt-2'}>
                  Already registered?<Link to={'/'} className={'ms-2'}>Sign in</Link>
                </p>
              </form>
            </div>
          </div>)}
      </>
  );
}

export default SignupPage;
