import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cep from './cep';

const reducer = combineReducers({ cep });

const store = configureStore({ reducer });

export default store;
