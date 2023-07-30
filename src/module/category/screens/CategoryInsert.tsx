import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/button';
import Input from '../../../shared/components/inputs/input/Input';
import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { useInsertCategory } from '../hooks/useInsertCategory';
import { CategoryRouterEnum } from '../routes';

const CategoryInsert = () => {
  const navigate = useNavigate();
  const { name, categoryId, loading, handleOnChangeName, insertCategory, disabledButton } =
    useInsertCategory();

  const handleOnClickCancel = () => {
    navigate(CategoryRouterEnum.CATEGORY);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'CATEGORIAS',
          navigateTo: CategoryRouterEnum.CATEGORY,
        },
        {
          name: categoryId ? 'EDITAR CATEGORIA' : 'INSERIR CATEGORIAS',
        },
      ]}
    >
      <DisplayFlexJustifyCenter>
        {loading && categoryId ? (
          <DisplayFlexJustifyCenter>
            <Loading size="large" />
          </DisplayFlexJustifyCenter>
        ) : (
          <LimitedContainer width={400}>
            <Input
              onChange={handleOnChangeName}
              value={name}
              margin="0px 0px 16px 0px"
              title="Nome"
              placeholder="Nome"
            />

            <DisplayFlexJustifyRight>
              <LimitedContainer margin="0px 16px" width={120}>
                <Button danger onClick={handleOnClickCancel}>
                  Cancelar
                </Button>
              </LimitedContainer>
              <LimitedContainer width={160}>
                <Button
                  loading={loading}
                  disabled={disabledButton}
                  onClick={insertCategory}
                  type="primary"
                >
                  {categoryId ? 'Salvar' : 'Inserir categoria'}
                </Button>
              </LimitedContainer>
            </DisplayFlexJustifyRight>
          </LimitedContainer>
        )}
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default CategoryInsert;
