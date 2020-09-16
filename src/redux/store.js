import userReducer from "./user/userReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";

// const rootReducer = combineReducers({
//   users: userReducer,
// });

const midddleware = [logger];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...midddleware)
);
export const persistor = persistStore(store);

// export default { store, persistor };
