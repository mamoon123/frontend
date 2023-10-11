import rootReducer from "./index";

export type AppState = Omit<
  ReturnType<ReturnType<typeof rootReducer>>,
  "router"
>;
