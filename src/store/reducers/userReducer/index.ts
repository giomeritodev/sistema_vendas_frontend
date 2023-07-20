import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../../module/login/types/UserType';

// Define a type for the slice state
interface UserState {
  users: UserType[];
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
};

export const counterSlice = createSlice({
  name: 'userReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsersAction: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersAction } = counterSlice.actions;

export default counterSlice.reducer;
