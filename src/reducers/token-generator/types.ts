import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {GenerateTokenRequestPayload, GenerateTokenResponsePayload} from "../../api/types";

export type State = {
  digits: string | undefined;
  generatedToken: string |undefined;
  isFetching: boolean;
  generateTokenFailed: boolean;
};

export type GenerateTokenSlice = {
  createGenerateToken: CaseReducer<State, PayloadAction<GenerateTokenRequestPayload>>;
  createdGenerateToken: CaseReducer<State, PayloadAction<GenerateTokenResponsePayload>>;
  failedGenerateToken: CaseReducer<State>;
};

