import { useEffect, useState } from 'react';

import { URL_USER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

export const useUser = () => {
  const { users, setUsers } = useUserReducer();
  const [usersFiltered, setUsersFiltered] = useState(users);
  const { request, loading } = UseRequests();

  useEffect(() => {
    if (!users || users.length === 0) {
      request(URL_USER_ALL, MethodsEnum.GET, setUsers);
    }
  }, []);

  useEffect(() => {
    setUsersFiltered([...users]);
  }, [users]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setUsersFiltered([...users]);
    } else {
      setUsersFiltered([
        ...usersFiltered.filter((user) => user.name.toUpperCase().includes(value.toUpperCase())),
      ]);
    }
  };

  return {
    users: usersFiltered,
    handleOnChangeSearch,
    loading,
  };
};
