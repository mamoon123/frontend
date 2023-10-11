import { createSlice } from "@reduxjs/toolkit";
import tokenGeneratorSaga from "./sagas";
import {GenerateTokenSlice, State} from "./types";

export const initialState: State = {
  digits: undefined,
  generatedToken: undefined,
  isFetching: false,
  generateTokenFailed: false
};

const generateToken = createSlice<State, GenerateTokenSlice>({
  name: "generateToken",
  initialState,
  reducers: {
    createGenerateToken(state) {
      state.isFetching = true;
      state.generatedToken = undefined;
      state.generateTokenFailed = false;
    },
    createdGenerateToken(state, { payload }) {
      state.isFetching = false;
      state.generatedToken = payload.tokenValue;
      state.generateTokenFailed = false;
    },
    failedGenerateToken(state) {
      state.generateTokenFailed = true;
      state.isFetching= false
    }
  }
});

export const {
  createGenerateToken,
  createdGenerateToken,
  failedGenerateToken
} = generateToken.actions;

export { tokenGeneratorSaga };

export default generateToken.reducer;
