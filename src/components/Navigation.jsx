import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Navigation.module.css';

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <nav class={styles.navbar}>
        <div class={styles.navLinks}>

          <div>
            <ul class={styles.links}>
                <Link class={styles.link} to="/">
                  WORK
                </Link>

                <Link class={styles.link} to="/aboutme">
                  ABOUT ME
                  <span class="sr-only"></span>
                </Link>
              
                <Link class={styles.link} to="/art">
                  ART
                </Link>
             
                <Link class={styles.link} to="/contact">
                  CONTACT
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;