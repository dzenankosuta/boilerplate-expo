import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './src/store/reducer';

export const store = configureStore({
    reducer: rootReducer,
});
