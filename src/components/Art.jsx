import React, { useEffect } from "react";
import styles from "../styles/Art.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Art = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className={styles.art}>
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
              
                <Link class={styles.link1} to="/art">
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
      <div data-aos="fade-in" class={styles.image}>
        <img
          class={styles.image}
          src="images/art.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Art;