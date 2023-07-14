import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../../module/login/types/UserType';
import { NotificationType } from '../../../shared/types/NotificationType';

// Define a type for the slice state
interface GlobalState {
  notification?: NotificationType;
  user?: UserType;
}

// Define the initial state using that type
const initialState: GlobalState = {
  notification: undefined,
  user: undefined,
};

export const counterSlice = createSlice({
  name: 'globalReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setNotificationAction: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload;
    },
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setNotificationAction, setUserAction } = counterSlice.actions;

export default counterSlice.reducer;
