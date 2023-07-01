import { useEffect } from 'react';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../types/ProductType';

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = UseRequests();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  return products.map((prod) => <div key={prod.id}>{prod.name}</div>);
};

export default Product;
