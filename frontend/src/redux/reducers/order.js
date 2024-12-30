import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    // get all  order of  an user
    .addCase("getAllOrdersUserRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllOrdersUserSuccess", (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase("getAllOrdersUserFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // get all  order of  an shop
    .addCase("getAllOrdersShopRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllOrdersShopSuccess", (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase("getAllOrdersShopFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
