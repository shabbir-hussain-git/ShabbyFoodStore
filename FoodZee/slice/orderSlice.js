import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  orderMap: {},
};

export const orderSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, ele) => {
      console.log(ele.payload);
      let payload = ele.payload;
      state.value += 1;
      if (state.orderMap[payload.rId]) {
        state.orderMap[payload.rId].push(payload);
      } else {
        state.orderMap[payload.rId] = [payload];
      }
      // state.arr.push(ele);
    },
    decrement: (state, ele) => {
      state.value -= 1;
      let payload = ele.payload;
      if (
        state.orderMap[payload.rId] &&
        state.orderMap[payload.rId].length > 0
      ) {
        state.orderMap[payload.rId].pop();
      } else {
        state.orderMap[payload.rId] = [];
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = orderSlice.actions;

export default orderSlice.reducer;
