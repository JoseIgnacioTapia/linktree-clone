import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moduleStyles from '../styles/ButtonStart.module.css';

const Container = styled.div`
  padding: 64px 0;
`;
const FormContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 80px;
  border-radius: 16px;
  border: 1px solid rgb(218, 222, 224);
  text-align: center;
`;

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',
};
const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <FormContainer>
        <span className="form-title">Sign in to your Linktree account</span>
        <form style={formStyle} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <Link to="/admin">
            <input
              className={moduleStyles.buttonStart}
              type="submit"
              value="Sign In"
            />
          </Link>
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
