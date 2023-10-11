import { createSlice } from "@reduxjs/toolkit";
import tokenValiditySaga from "./sagas";
import { State, TokenValiditySlice } from "./types";

export const initialState: State = {
  isTokenValid: false,
  isFetching: false,
  hasError: false
};

const tokenValidity = createSlice<State, TokenValiditySlice>({
  name: "tokenValidity",
  initialState,
  reducers: {
    fetchTokenValidity(state) {
      state.isFetching = true;
      state.hasError = false;
      state.isTokenValid = false;
    },
    fetchedTokenValidity(state, { payload }) {
      state.isFetching = false;
      state.isTokenValid = payload.isValid;
      state.hasError = false;
    },
    fetchingFailedTokenValidity(state) {
      state.hasError = true;
      state.isFetching= false;
      state.isTokenValid = false;
    }
  }
});

export const {
  fetchTokenValidity,
  fetchedTokenValidity,
  fetchingFailedTokenValidity
} = tokenValidity.actions;

export { tokenValiditySaga };

export default tokenValidity.reducer;
