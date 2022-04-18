import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../components/Card';
import { fetchPhotos } from '../redux/reducers/photosReducer';

import styles from '../scss/pages/Home.module.scss';
import { useTypedSelector } from '../types';

const Home = () => {
  const { photos, isLoading } = useTypedSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const state = useTypedSelector((state) => state);
  console.log(state);
  return (
    <div className={styles.root}>
      <h1>Галерея</h1>
      {isLoading ? (
        <div className={styles.loader}> Идёт загрузка...</div>
      ) : (
        <>
          <div className={styles.cardList}>
            {photos.map((obj) => (
              <Card key={obj.id} id={obj.id} imgUrl={obj.url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
