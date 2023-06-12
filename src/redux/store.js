
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
    
import storage from 'redux-persist/lib/storage'
import { filtersReducer } from "./filterSlice";
const { configureStore } = require("@reduxjs/toolkit");
const { contactsReducer } = require("./contactSlice");


const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
  }

const persistContactsReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistContactsReducer,
        filter: filtersReducer,
      },
      middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        });
      },
  });

  export const persistor = persistStore(store)


