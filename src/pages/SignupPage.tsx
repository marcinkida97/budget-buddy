import '../App.css';
import { Link, Navigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import {AxiosError} from "axios";
import Logo from "../components/Header/Logo/Logo";

const REGISTER_URL = '/api/v1/auth/register';

const SignupPage = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
          REGISTER_URL,
          { firstname, lastname, email, password },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
      );

      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setSuccess(true);
    } catch (err) {
      if ((err as AxiosError)?.isAxiosError) {
        const axiosError = err as AxiosError;

        if (!axiosError?.response) {
          setErrMessage('No Server Response');
        } else if (axiosError.response?.status === 400) {
          setErrMessage('Missing something');
        } else if (axiosError.response?.status === 401) {
          setErrMessage('Unauthorized');
        } else {
          setErrMessage('Sign Up Failed!');
        }
      } else {
        setErrMessage('An unexpected error occurred');
      }

      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  return (
      <>
        {success ? (
            <Navigate to="/" />
        ) : (
            <div className="signup template d-flex justify-content-center align-items-center">
              <div className="p-2">
                <Logo/>
                <div className="p-5">
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="mb-2">
                      <label htmlFor="fname">First name</label>
                      <input
                          type="text"
                          placeholder="firstname"
                          className="form-control"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="lname">Last name</label>
                      <input
                          type="text"
                          placeholder="lastname"
                          className="form-control"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="email">Email</label>
                      <input
                          type="email"
                          placeholder="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="password">Password</label>
                      <input
                          type="password"
                          placeholder="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Sign up
                      </button>
                    </div>
                    <p className="text-end mt-2">
                      Already registered? <Link to="/" className="ms-2">Sign in</Link>
                    </p>
                  </form>
                  {errMessage && (
                      <div className="alert alert-danger mt-3" ref={errRef} role="alert">
                        {errMessage}
                      </div>
                  )}
                </div>
              </div>
            </div>
        )}
      </>
  );
};

export default SignupPage;
