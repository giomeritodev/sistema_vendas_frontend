import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/button';
import { ContainerPageNotFound } from '../styles/pageNotFound.styles';

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleOnClickButton = () => {
    navigate('/login');
  };
  return (
    <ContainerPageNotFound>
      <Result
        status="403"
        title="403"
        subTitle="Desculpe, a página que você esta visitando não existe."
        extra={
          <Button onClick={handleOnClickButton} type="primary">
            Página de login
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};

export default PageNotFound;
