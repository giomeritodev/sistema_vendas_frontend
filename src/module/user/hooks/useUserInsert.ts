import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { InsertUser } from '../../../shared/components/dtos/insertUser.dto';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { UserRouterEnum } from '../routes';

export const useUserInsert = () => {
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(true);
  const { request, loading } = UseRequests();
  const [user, setUser] = useState<InsertUser>({
    cpf: '',
    email: '',
    phone: '',
    name: '',
    password: '',
  });
  useEffect(() => {
    if (user.cpf && user.name && user.email && user.phone && user.password) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [user]);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setUser((currentUser) => ({
      ...currentUser,
      [name]: event.target.value,
    }));
  };

  const handleCancelInsert = () => {
    navigate(UserRouterEnum.USER_ALL);
  };

  const handleInsertAdmin = async () => {
    const result = await request(URL_USER, MethodsEnum.POST, undefined, user);
    if (result) {
      navigate(UserRouterEnum.USER_ALL);
    }
  };

  return {
    user,
    handleCancelInsert,
    handleInsertAdmin,
    handleOnChangeInput,
    disabledButton,
    loading,
  };
};
