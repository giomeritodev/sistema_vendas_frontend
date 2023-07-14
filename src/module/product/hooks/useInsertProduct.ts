import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { InsertProduct } from '../../../shared/components/dtos/insertProduct.dto';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRouterEnum } from '../routes';

export const useInsertProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const { setNotification } = useGlobalReducer();
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
    weight: 0,
    length: 0,
    height: 0,
    width: 0,
    diameter: 0,
  });

  useEffect(() => {
    if (product.name && product.categoryId && product.image && product.price > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [product]);

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
    setLoading(true);
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Sucesso!', 'success', 'Produto inserido com sucesso.');
        navigate(ProductRouterEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
    setLoading(false);
  };

  return {
    product,
    loading,
    disabledButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
  };
};
