import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styles from '../scss/components/Drawer.module.scss';
import avatar from '../img/pafinc.jpg';

const Drawer = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={styles.root}>
      <Button variant="primary" onClick={handleShow}>
        Меню
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              <img src={avatar} alt="" width={200} />
            </li>
            <li>
              <b>Евгений</b>
            </li>
            <li>
              <b>hurakane122@gmail.com</b>
            </li>
          </ul>
          <ul style={{ fontSize: '32px' }}>
            <li>
              <Link to={'/'}>Галерея</Link>
            </li>
            <li>
              <Link to={'/about'}>Обо мне</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Drawer;
