import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/input/inputMoney/inputMoney';
import Select from '../../../shared/components/inputs/select/select';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyRight } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRouterEnum } from '../routes';
import { ProductInsertContainer } from '../styles/productInsert.style';

const ProductInsert = () => {
  const {
    product,
    loading,
    disabledButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
  } = useInsertProduct();

  const { categories, setCategories } = useDataContext();

  const { request } = UseRequests();
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleOnClickCancel = () => {
    navigate(ProductRouterEnum.PRODUCT);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS',
          navigateTo: ProductRouterEnum.PRODUCT,
        },
        {
          name: 'INSERIR PRODUTO',
        },
      ]}
    >
      <ProductInsertContainer>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => onChangeInput(event, 'name')}
            value={product.name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            onChange={(event) => onChangeInput(event, 'image')}
            value={product.image}
            margin="0px 0px 16px 0px"
            title="Url Image"
            placeholder="Url da Image"
          />
          <InputMoney
            onChange={(event) => onChangeInput(event, 'price', true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Valor do item"
          />
          <Select
            title="Categoria"
            margin="0px 0px 32px 0px"
            onChange={handleChangeSelect}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <Input
            onChange={(event) => onChangeInput(event, 'weight', true)}
            value={product.weight}
            margin="0px 0px 16px 0px"
            title="Peso"
            placeholder="Peso do item"
          />
          <Input
            onChange={(event) => onChangeInput(event, 'length', true)}
            value={product.length}
            margin="0px 0px 16px 0px"
            title="Comprimento"
            placeholder="Comprimento do item"
          />
          <Input
            onChange={(event) => onChangeInput(event, 'height', true)}
            value={product.height}
            margin="0px 0px 16px 0px"
            title="Altura"
            placeholder="Altura do item"
          />
          <Input
            onChange={(event) => onChangeInput(event, 'width', true)}
            value={product.width}
            margin="0px 0px 16px 0px"
            title="Largura"
            placeholder="Largura do item"
          />
          <Input
            onChange={(event) => onChangeInput(event, 'diameter', true)}
            value={product.diameter}
            margin="0px 0px 16px 0px"
            title="Diâmetro"
            placeholder="Diâmetro do item"
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 16px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button
                loading={loading}
                disabled={disabledButton}
                onClick={handleInsertProduct}
                type="primary"
              >
                Inserir produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;
