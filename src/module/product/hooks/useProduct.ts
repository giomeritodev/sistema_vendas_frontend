import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRouterEnum } from '../routes';

export const useProduct = () => {
  const [productIdDelete, setProductIdDelete] = useState<number | undefined>();
  const { products, setProducts } = useProductReducer();
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);
  const { request } = UseRequests();
  const navigate = useNavigate();

  const findAllProducts = async () => {
    await request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };

  useEffect(() => {
    setProductsFiltered([...products]);
  }, [products]);

  useEffect(() => {
    findAllProducts();
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRouterEnum.PRODUCT_INSERT);
  };

  const onSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([...productsFiltered.filter((product) => product.name.includes(value))]);
    }
  };

  const handleDeleteProduct = async () => {
    await request(URL_PRODUCT_ID.replace('{productId}', `${productIdDelete}`), MethodsEnum.DELETE);
    await findAllProducts();
    setProductIdDelete(undefined);
  };

  const handleEditProduct = async (productId: number) => {
    navigate(ProductRouterEnum.PRODUCT_EDIT.replace(':productId', `${productId}`));
  };

  const handleOpenModalDelete = (productId: number) => {
    setProductIdDelete(productId);
  };
  const handleCloseModalDelete = () => {
    setProductIdDelete(undefined);
  };

  return {
    handleOnClickInsert,
    onSearch,
    productsFiltered,
    handleDeleteProduct,
    handleEditProduct,
    openModalDelete: !!productIdDelete,
    handleCloseModalDelete,
    handleOpenModalDelete,
  };
};
