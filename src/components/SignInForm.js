import styled from 'styled-components';

const SignInForm = () => {
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

  return (
    <Container>
      <FormContainer>
        <span className="form-title">Sign in to your Linktree account</span>
        <form style={formStyle}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign in" />
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
