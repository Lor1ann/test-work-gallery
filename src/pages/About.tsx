import React from 'react';
import styles from '../scss/pages/About.module.scss';

const About = () => {
  return (
    <div className={styles.root}>
      <h2>Обо мне</h2>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          Меня зовут Евгений. Я живу в городе Воронеж. Фронтенду обучаюсь уже больше полугода. За
          это время научился верстать, вычуил HTML и CSS. Далее начал изучать JS, на это ушло
          давольно много времени, особенно на ES 2015. После начал изучать React, познакомился с
          хуками, компонентами, JSX-ом, пропсами и тд. Понял работу Redux и Redux-thunk, использовал
          React Hook Form, React Router. Сейчас активно использую TypeScript и пытаюсь расширить
          опыт в нем. В планах написать проект на Next JS и выучить Redux-Toolkit. А дальше Vue...
        </div>
      </div>
    </div>
  );
};

export default About;
