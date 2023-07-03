import Screen from '../../../shared/components/screen/Screen';
import { ProductRouterEnum } from '../routes';

const ProductInsert = () => {
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
      Inserir produto
    </Screen>
  );
};

export default ProductInsert;
