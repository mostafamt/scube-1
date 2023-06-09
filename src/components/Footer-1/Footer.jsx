import React from 'react';
import Contact from './Contact/Contact';

import styles from './footer.module.scss';
import SchoolInfo from './SchoolInfo/SchoolInfo';
import ScubeInfo from './ScubeInfo/ScubeInfo';
import Tail from './Tail/Tail';

const scubeStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10%',

  '& > div': {
    flex: '1 1 auto',
    overflow: 'hidden',
  },
};

const schoolStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  div: {
    flex: '0 0 40%',
    overflow: 'hidden',
  },

  '& > div:first-child': {
    flex: '0 0 25%',
  },

  '& > div:last-child': {
    flex: '0 0 25%',
  },
};

const Footer = (props) => {
  const [emailSent, setEmailSent] = React.useState(false);

  const onToggleEmailSent = () => {
    setEmailSent(!emailSent);
  };

  return (
    <footer className={styles.footer}>
      <h2 className="section-title">Get in Touch</h2>
      <div className="container" style={props.info ? schoolStyle : scubeStyle}>
        <ScubeInfo />
        <Contact schoolName={props.schoolName} to={props.to} />
        <SchoolInfo {...props} />
      </div>
      <Tail />
    </footer>
  );
};

export default Footer;
