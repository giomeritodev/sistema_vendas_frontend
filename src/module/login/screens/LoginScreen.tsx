import Input from '../../../shared/inputs/input/input';
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
            <Input title="Usuário" />
            <Input title="Senha" />
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
