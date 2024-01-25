import React, {useEffect, useRef, useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from '../api/axios';
import {AxiosError} from "axios";

const LOGIN_URL = '/api/v1/auth/authenticate';

const LoginPage = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMessage(null);
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
          LOGIN_URL,
          { email, password },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
      );

      const { token, userId } = response?.data || {};
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      setEmail('');
      setPassword('');
      setSuccess(true);
    } catch (err) {
      if ((err as AxiosError)?.isAxiosError) {
        const axiosError = err as AxiosError;

        if (!axiosError?.response) {
          setErrMessage('No Server Response');
        } else if (axiosError.response.status === 400) {
          setErrMessage('Missing Username or Password');
        } else if (axiosError.response.status === 401) {
          setErrMessage('Unauthorized');
        } else {
          setErrMessage('Login Failed! Probably due to wrong email or password ;)');
        }
      } else {
        setErrMessage('An unexpected error occurred');
      }

      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  if (success) {
    return <Navigate to="/dashboard" />;
  }

  return (
      <div className="login template d-flex justify-content-center align-items-center">
        <div className="form_container p-5">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Sign In</h3>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  placeholder="email"
                  className="form-control"
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  id="password"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
            <p className="text-end mt-2">
              Don't have an account yet? <Link to="/signup" className="ms-2">Sign up</Link>
            </p>
          </form>
          {errMessage && (
              <div className="alert alert-danger mt-3" ref={errRef} role="alert">
                {errMessage}
              </div>
          )}
        </div>
      </div>
  );
};

export default LoginPage;
