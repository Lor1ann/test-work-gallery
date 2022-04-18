import React, { useState } from 'react';
import styles from '../scss/components/Card.module.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card: React.FC<{ id: string; imgUrl: string }> = ({ id, imgUrl }) => {
  const [isCard, hasCard] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      <div
        className={styles.cardImg}
        onMouseOver={() => hasCard(true)}
        onMouseLeave={() => {
          hasCard(false);
        }}>
        <img src={imgUrl} alt="card" width={300} height={300} />
        {isCard && (
          <Button className={styles.imgButton}>
            <Link to={`/photo/${id}`}>Подробнее</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
