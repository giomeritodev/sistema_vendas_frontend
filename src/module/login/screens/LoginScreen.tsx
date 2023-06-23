import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LoginImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LoginImage src="./logo.svg" />
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
