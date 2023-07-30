import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryType } from '../../../shared/types/CategoryType';

// Define a type for the slice state
interface CategoryState {
  categories: CategoryType[];
  category?: CategoryType;
}

// Define the initial state using that type
const initialState: CategoryState = {
  categories: [],
  category: undefined,
};

export const counterSlice = createSlice({
  name: 'categoryReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCategoriesAction: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
    setCategoryAction: (state, action: PayloadAction<CategoryType>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategoriesAction, setCategoryAction } = counterSlice.actions;

export default counterSlice.reducer;
