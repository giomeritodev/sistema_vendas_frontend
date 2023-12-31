import { useParams } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/input/inputMoney/inputMoney';
import Select from '../../../shared/components/inputs/select/select';
import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { useCategory } from '../../category/hooks/useCategory';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRouterEnum } from '../routes';

const ProductInsert = () => {
  const { productId } = useParams<{ productId?: string }>();
  const {
    isEdit,
    product,
    loading,
    loadingProduct,
    disabledButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
    handleOnClickCancel,
  } = useInsertProduct(productId);

  const { categories } = useCategory();

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
      {loadingProduct ? (
        <DisplayFlexJustifyCenter>
          <Loading size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <DisplayFlexJustifyCenter>
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
              defaultValue={`${product.categoryId || ''}`}
              title="Categoria"
              margin="0px 0px 32px 0px"
              onChange={handleChangeSelect}
              options={categories.map((category) => ({
                value: `${category.id}`,
                label: `${category.name}`,
              }))}
            />
            <DisplayFlex>
              <InputMoney
                addonBefore="Kg"
                onChange={(event) => onChangeInput(event, 'weight', true)}
                value={product.weight}
                margin="0px 16px 16px 0px"
                title="Peso"
                placeholder="Peso do item"
              />
              <InputMoney
                addonBefore="Cm"
                onChange={(event) => onChangeInput(event, 'length', true)}
                value={product.length}
                margin="0px 0px 16px 0px"
                title="Comprimento"
                placeholder="Comprimento do item"
              />
            </DisplayFlex>
            <DisplayFlex>
              <InputMoney
                addonBefore="Cm"
                onChange={(event) => onChangeInput(event, 'height', true)}
                value={product.height}
                margin="0px 16px 16px 0px"
                title="Altura"
                placeholder="Altura do item"
              />
              <InputMoney
                addonBefore="Cm"
                onChange={(event) => onChangeInput(event, 'width', true)}
                value={product.width}
                margin="0px 0px 16px 0px"
                title="Largura"
                placeholder="Largura do item"
              />
            </DisplayFlex>
            <InputMoney
              addonBefore="Cm"
              onChange={(event) => onChangeInput(event, 'diameter', true)}
              value={product.diameter}
              margin="0px 0px 32px 0px"
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
                  {isEdit ? 'Salvar' : 'Inserir produto'}
                </Button>
              </LimitedContainer>
            </DisplayFlexJustifyRight>
          </LimitedContainer>
        </DisplayFlexJustifyCenter>
      )}
    </Screen>
  );
};

export default ProductInsert;
