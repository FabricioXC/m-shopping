import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "../reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
