import { call, put, takeLatest } from "redux-saga/effects";

import {
  createdGenerateToken,
  createGenerateToken as createGenerateTokenAction, failedGenerateToken,
} from "../index";
import { generateTokenApi } from "../../../api/api";

function* createGenerateToken({
    payload: digits
}: ReturnType<typeof createGenerateTokenAction>): unknown {
  try {
    const response = yield call(generateTokenApi, digits);
    yield put(createdGenerateToken(response));
  } catch (e) {
    yield put(failedGenerateToken());
  }
}

export default function* tokenGeneratorSaga() {
  yield takeLatest(
      createGenerateTokenAction.type,
      createGenerateToken
  );
}
