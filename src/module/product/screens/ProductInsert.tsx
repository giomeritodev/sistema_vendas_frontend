import { useEffect, useState } from 'react';

import Button from '../../../shared/components/buttons/button/button';
import { InsertProduct } from '../../../shared/components/dtos/insertProduct.dto';
import Input from '../../../shared/components/inputs/input/input';
import Select from '../../../shared/components/inputs/select/select';
import Screen from '../../../shared/components/screen/Screen';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { ProductRouterEnum } from '../routes';
import { LimitedContainer } from '../styles/productInsert.style';

const ProductInsert = () => {
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
  });
  const { categories, setCategories } = useDataContext();
  const { request } = UseRequests();
  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleInsertProduct = () => {
    connectionAPIPost(URL_PRODUCT, product);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, nameObject: string) => {
    setProduct({
      ...product,
      [nameObject]: event.target.value,
    });
  };

  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      price: Number(event.target.value),
    });
  };

  const handleChange = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
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
      <LimitedContainer>
        <Input
          onChange={(event) => onChange(event, 'name')}
          value={product.name}
          margin="0px 0px 16px 0px"
          title="Nome"
          placeholder="Nome"
        />
        <Input
          onChange={(event) => onChange(event, 'image')}
          value={product.image}
          margin="0px 0px 16px 0px"
          title="Url Image"
          placeholder="Url da Image"
        />
        <Input
          onChange={onChangePrice}
          value={product.price}
          margin="0px 0px 16px 0px"
          title="Preço"
          placeholder="Valor do item"
        />
        <Select
          title="Categoria"
          margin="0px 0px 32px 0px"
          onChange={handleChange}
          options={categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`,
          }))}
        />
        <Button onClick={handleInsertProduct} type="primary">
          Inserir produto
        </Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
