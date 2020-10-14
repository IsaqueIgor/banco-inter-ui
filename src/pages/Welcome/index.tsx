import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { AnimatedContainer, Form, SignInButton } from './styles';
import useAuth from '../../contexts/auth';
import { BancoInter } from '../../assets/images';

const Welcome: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();
  const { signIn } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signIn(inputValue);
    history.push('/dashboard');
  };

  return (
    <AnimatedContainer>
      <h1>
        <BancoInter />
      </h1>
      <h2>Welcome to the redesign of the interface of Banco Inter.</h2>
      <Form onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <SignInButton type="submit" disabled={!inputValue}>
          Sign In
        </SignInButton>
      </Form>
    </AnimatedContainer>
  );
};

export default Welcome;
