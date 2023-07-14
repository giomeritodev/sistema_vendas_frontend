import { useDispatch } from 'react-redux';

import { CategoryType } from '../../../shared/types/CategoryType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction } from '.';

export const useCategoryReducer = () => {
  const { categories } = useAppSelector((store) => store.categoryReducer);
  const dispatch = useDispatch();
  const setCategories = (currentCategories: CategoryType[]) => {
    dispatch(setCategoriesAction(currentCategories));
  };

  return {
    categories,
    setCategories,
  };
};
