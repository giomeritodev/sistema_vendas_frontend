import { useDispatch } from 'react-redux';

import { CategoryType } from '../../../shared/types/CategoryType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction, setCategoryAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();
  const { categories, category } = useAppSelector((store) => store.categoryReducer);
  const setCategories = (currentCategories: CategoryType[]) => {
    dispatch(setCategoriesAction(currentCategories));
  };

  const setCategory = (currentCategory: CategoryType) => {
    dispatch(setCategoryAction(currentCategory));
  };

  return {
    category,
    categories,
    setCategories,
    setCategory,
  };
};
