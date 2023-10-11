import { combineReducers } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

import { AppState } from "./types";

import generateTokenReducer , {
  tokenGeneratorSaga,
  initialState as generateTokenInitialState,
} from "./token-generator";

import tokenValidityReducer , {
  tokenValiditySaga,
  initialState as tokenValidityInitialState,
} from "./token-validator";

export function* rootSaga() {
  yield all([
    tokenGeneratorSaga(),
    tokenValiditySaga()
  ]);
}

const createCombinedReducer = () =>
  combineReducers({
    generateToken: generateTokenReducer,
    tokenValidity: tokenValidityReducer
  });

export const initialState: AppState = {
  generateToken: generateTokenInitialState,
  tokenValidity: tokenValidityInitialState
};

export default createCombinedReducer;
