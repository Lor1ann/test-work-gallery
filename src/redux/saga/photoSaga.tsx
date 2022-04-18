import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import { IPhoto } from '../../types';
import { setPhotos, setPhotosSuccess } from '../reducers/photosReducer';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function fetchPhotosApi(): Promise<IPhoto> {
  return await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=24');
}
function* photoWorker() {
  try {
    yield put(setPhotos());
    yield delay(500);
    const { data } = yield call(fetchPhotosApi);

    yield put(setPhotosSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* photosWatcher() {
  yield takeEvery('FETCH_PHOTOS', photoWorker);
}

export function* photosWatcherId() {
  yield takeEvery('FETCH_PHOTOS', photoWorker);
}
