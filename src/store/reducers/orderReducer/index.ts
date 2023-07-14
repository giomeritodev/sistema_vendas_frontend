import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderType } from '../../../shared/types/OrderType';

// Define a type for the slice state
interface OrderState {
  orders: OrderType[];
}

// Define the initial state using that type
const initialState: OrderState = {
  orders: [],
};

export const counterSlice = createSlice({
  name: 'orderReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOrdersAction: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrdersAction } = counterSlice.actions;

export default counterSlice.reducer;
