import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchedTokenValidity,
  fetchTokenValidity as fetchTokenValidityAction, fetchingFailedTokenValidity,
} from "../index";
import { tokenValidityApi } from "../../../api/api";

function* fetchTokenValidity({
    payload: token
}: ReturnType<typeof fetchTokenValidityAction>): unknown {
  try {
    const response = yield call(tokenValidityApi, token);
    yield put(fetchedTokenValidity(response));
  } catch (e) {
    yield put(fetchingFailedTokenValidity());
  }
}

export default function* tokenValiditySaga() {
  yield takeLatest(
      fetchTokenValidityAction.type,
      fetchTokenValidity
  );
}
