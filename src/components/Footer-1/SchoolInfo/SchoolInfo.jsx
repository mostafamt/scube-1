import React from 'react';

import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutlineOutlined,
} from '@mui/icons-material';

import styles from './schoolInfo.module.scss';

const SchoolInfo = ({ info }) => {
  const img = info?.img;
  const address = info?.address;
  const phone = info?.phone;
  const email = info?.email;

  return info ? (
    <div className={styles.schoolInfo}>
      <div className={styles['img-box']}>
        <img src={img} alt="school-logo" />
      </div>
      <ul className={`list ${styles['schoolInfo__list']}`}>
        <li>
          <LocationOnOutlined />
          {address}
        </li>
        <li>
          <LocalPhoneOutlined />
          {phone}
        </li>
        <li>
          <MailOutlineOutlined />
          {email}
        </li>
      </ul>
    </div>
  ) : null;
};

export default SchoolInfo;
