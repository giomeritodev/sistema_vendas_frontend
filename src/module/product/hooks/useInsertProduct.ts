import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { InsertProduct } from '../../../shared/components/dtos/insertProduct.dto';
import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRouterEnum } from '../routes';

const DEFAULT_PRODUCT = {
  name: '',
  price: 0,
  image: '',
  weight: 0,
  length: 0,
  height: 0,
  width: 0,
  diameter: 0,
};

export const useInsertProduct = (productId?: string) => {
  const navigate = useNavigate();
  const [loadingProduct, setLoadingproduct] = useState(false);
  const { request, loading } = UseRequests();
  const { product: productReducer, setProduct: setProductReducer } = useProductReducer();

  const [isEdit, setIsEdit] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [product, setProduct] = useState<InsertProduct>(DEFAULT_PRODUCT);

  useEffect(() => {
    if (product.name && product.categoryId && product.image && product.price > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [product]);

  useEffect(() => {
    if (productReducer) {
      setProduct({
        name: productReducer.name,
        price: productReducer.price,
        image: productReducer.image,
        weight: productReducer.weight,
        length: productReducer.length,
        height: productReducer.height,
        width: productReducer.width,
        diameter: productReducer.diameter,
        categoryId: productReducer.category?.id,
      });
    }
  }, [productReducer]);

  useEffect(() => {
    const findProduct = async () => {
      setLoadingproduct(true);
      await request(
        URL_PRODUCT_ID.replace('{productId}', `${productId}`),
        MethodsEnum.GET,
        setProductReducer,
      );
      setLoadingproduct(false);
    };
    if (productId) {
      setIsEdit(true);
      findProduct();
    } else {
      setProductReducer(undefined);
      setProduct(DEFAULT_PRODUCT);
    }
  }, [productId]);

  const handleOnClickCancel = () => {
    setProductReducer(undefined);
    setProduct(DEFAULT_PRODUCT);
    navigate(ProductRouterEnum.PRODUCT);
  };

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const handleChangeSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const handleInsertProduct = async () => {
    if (productId) {
      await request(
        URL_PRODUCT_ID.replace('{productId}', `${productId}`),
        MethodsEnum.PUT,
        undefined,
        product,
        'Produto modificado!',
      );
    } else {
      await request(URL_PRODUCT, MethodsEnum.POST, undefined, product, 'Producto criado!');
    }
    navigate(ProductRouterEnum.PRODUCT);
  };

  return {
    isEdit,
    product,
    loading,
    disabledButton,
    loadingProduct,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
    handleOnClickCancel,
  };
};
