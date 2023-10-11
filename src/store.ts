import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import createCombinedReducer, { rootSaga, initialState } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: createCombinedReducer(),
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            thunk: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;
