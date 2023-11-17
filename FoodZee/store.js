import {configureStore} from '@reduxjs/toolkit';
import orderSlice from './slice/orderSlice';
export const store = configureStore({
  reducer: {
    order: orderSlice,
  },
});
