import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '../../../shared/types/ProductType';

// Define a type for the slice state
interface ProductState {
  products: ProductType[];
  product?: ProductType;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  product: undefined,
};

export const counterSlice = createSlice({
  name: 'productReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setProductAction: (state, action: PayloadAction<ProductType | undefined>) => {
      state.product = action.payload;
    },
  },
});

export const { setProductsAction, setProductAction } = counterSlice.actions;

export default counterSlice.reducer;
