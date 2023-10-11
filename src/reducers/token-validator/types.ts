import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  TokenValidatorRequestPayload,
  TokenValidatorResponsePayload
} from "../../api/types";

export type State = {
  isTokenValid: boolean;
  isFetching: boolean;
  hasError: boolean;
};

export type TokenValiditySlice = {
  fetchTokenValidity: CaseReducer<State, PayloadAction<TokenValidatorRequestPayload>>;
  fetchedTokenValidity: CaseReducer<State, PayloadAction<TokenValidatorResponsePayload>>;
  fetchingFailedTokenValidity: CaseReducer<State>;
};

