import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";

// import authSlice from "./authSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({
//     auth: authSlice,
//   })
// );

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
// });

// const persistor = persistStore(store);

// export { store, persistor };
