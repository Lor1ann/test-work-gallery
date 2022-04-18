import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';

import createSagaMiddleware from '@redux-saga/core';

import { photosWatcher } from '../saga/photoSaga';
export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(photosWatcher)

export default store;
