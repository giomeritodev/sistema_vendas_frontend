import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRouterEnum } from '../routes';

export const useCategory = () => {
  const navigate = useNavigate();
  const [categoryIdDelete, setCategoryIdDelete] = useState<number | undefined>();
  const { categories, setCategories } = useCategoryReducer();
  const [categoriesFiltered, setCategoriesFiltered] = useState(categories);
  const { request } = UseRequests();

  const findAllCategories = () => {
    return request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  };

  useEffect(() => {
    if (!categories || categories.length === 0) {
      findAllCategories();
    }
  }, []);

  useEffect(() => {
    setCategoriesFiltered([...categories]);
  }, [categories]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setCategoriesFiltered([...categories]);
    } else {
      setCategoriesFiltered([
        ...categoriesFiltered.filter((category) =>
          category.name.toUpperCase().includes(value.toUpperCase()),
        ),
      ]);
    }
  };

  const handleOnClickInsert = () => {
    navigate(CategoryRouterEnum.CATEGORY_INSERT);
  };

  const handleOpenModalDelete = (categoryId: number) => {
    setCategoryIdDelete(categoryId);
  };

  const handleCancelModalDelete = () => {
    setCategoryIdDelete(undefined);
  };

  const handleConfirmDeleteCategory = async () => {
    await request(
      URL_CATEGORY_ID.replace('{categoryId}', `${categoryIdDelete}`),
      MethodsEnum.DELETE,
      undefined,
      undefined,
      'Categoria deletada!',
    );
    findAllCategories();
    setCategoryIdDelete(undefined);
  };

  return {
    categories: categoriesFiltered,
    handleOnChangeSearch,
    handleOnClickInsert,
    openModalDelete: !!categoryIdDelete,
    handleOpenModalDelete,
    handleCancelModalDelete,
    handleConfirmDeleteCategory,
  };
};
