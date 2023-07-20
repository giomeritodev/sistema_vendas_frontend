import { useDispatch } from 'react-redux';

import { UserType } from '../../../shared/types/UserType';
import { useAppSelector } from '../../hooks';
import { setUsersAction } from '.';

export const useUserReducer = () => {
  const { users } = useAppSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const setUsers = (users: UserType[]) => {
    dispatch(setUsersAction(users));
  };

  return {
    users,
    setUsers,
  };
};
