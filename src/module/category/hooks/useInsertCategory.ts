import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { CategoryRouterEnum } from '../routes';

export const useInsertCategory = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const { request } = UseRequests();
  const { setCategories } = useDataContext();

  useEffect(() => {
    !name ? setDisabledButton(true) : setDisabledButton(false);
  }, [name]);

  const insertCategory = async () => {
    setLoading(true);
    await request(URL_CATEGORY, MethodsEnum.POST, undefined, { name });
    await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    setLoading(false);
    navigate(CategoryRouterEnum.CATEGORY);
  };

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return {
    name,
    handleOnChangeName,
    insertCategory,
    loading,
    disabledButton,
  };
};
