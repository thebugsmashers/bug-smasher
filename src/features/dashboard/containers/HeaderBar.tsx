import React from 'react';
import styles from './HeaderBar.module.css';
import { pow, logo, avatar } from './images/index';

function HeaderBar() {
  return (
    <header>
      <div id={styles.logoContainer}>
        <img id={styles.logo} src={logo} alt="Bug Smasher logo - a cartoon drawing of a black widow spider" />
      </div>
      <div id={styles.pageTitleContainer}>
        <img id={styles.titlePow} src={pow} alt="pow" />
        <h1 id={styles.pageTitle}>BUG SMASHER</h1>
      </div>
      {/* Intentionally empty div for spacing purposes. */}
      <div />
      <div id={styles.userAvatarContainer}>
        <img id={styles.userAvatar} src={avatar} alt="User avatar" />
        <h3>Username</h3>
      </div>
      <div id={styles.logout}><h3>Log Out</h3></div>
    </header>
  );
}

export default HeaderBar;
