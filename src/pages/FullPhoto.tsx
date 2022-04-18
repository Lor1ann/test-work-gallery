import React, { useEffect, useState } from 'react';

import { Params, useNavigate, useParams } from 'react-router-dom';
import { IPhoto } from '../types';
import styles from '../scss/pages/FullPhoto.module.scss';
import { Button } from 'react-bootstrap';

import axios from 'axios';

const FullPhoto = () => {
  const nav = useNavigate();
  const params: Params<string> = useParams();

  const [currentPhoto, setCurrentPhoto] = useState<null | IPhoto>(null);

  useEffect(() => {
    async function getPhoto() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_limit=24&id=${params.id}`,
      );
      setCurrentPhoto(data[0]);
    }
    getPhoto();
  }, [params.id]);

  return (
    <div className={styles.root}>
      <p> Фото №{params.id} </p>
      {currentPhoto ? (
        <>
          {' '}
          <div>
            <img src={currentPhoto.url} alt="" width={500} />
          </div>
          <Button onClick={() => nav('/')}>Назад</Button>
        </>
      ) : (
        <div className={styles.loader}>Идёт загрузка...</div>
      )}
    </div>
  );
};

export default FullPhoto;
