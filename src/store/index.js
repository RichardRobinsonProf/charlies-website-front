import { configureStore } from '@reduxjs/toolkit';
import { pricesApi } from '../servicesFirebase/pricesServices';

const store = configureStore({
    reducer : {
        [pricesApi.reducerPath] : pricesApi.reducer
    },
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pricesApi.middleware)
});

export default store;


