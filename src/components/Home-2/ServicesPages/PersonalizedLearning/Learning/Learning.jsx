import React from 'react';

import styles from './learning.module.scss';

const NUM = 2;
const cards = [
  {
    title: 'Adaptive Learning Paths',
    desc: 'Static & Dynamic adaptation of learning paths to match the learner’s background knowledge and experience.',
  },
  {
    title: 'Instructional Design Theories (RBT)',
    desc: 'Teaching Strategy and Activities are dynamically generated to follow the Revised Bloom’s instructional design taxonomy in such a way to match the learner’s learning style model.',
  },
  {
    title: 'Learning Styles Model',
    desc: 'Personalized Pedagogy and Learning Contents according to the merged FSLSM & Kolb’s Learning Style Model of the learner',
  },
];

const Card = ({ num, title, desc }) => {
  return (
    <div key={num} className={styles.card}>
      <div>{`0${num}`}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Learning = () => {
  return (
    <div className={styles.learning}>
      <div>
        {cards.map((card, idx) => {
          if (idx >= NUM) return null;
          else
            return <Card num={idx + 1} title={card.title} desc={card.desc} />;
        })}
      </div>
      <div>
        <img src="/assets/learning.jpg" alt="learning" />
      </div>
      <div>
        {cards.map((card, idx) => {
          if (idx >= NUM)
            return <Card num={idx + 1} title={card.title} desc={card.desc} />;
          else return null;
        })}
      </div>
    </div>
  );
};

export default Learning;
