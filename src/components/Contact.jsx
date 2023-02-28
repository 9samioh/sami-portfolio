import React, { useEffect } from "react";
import styles from "../styles/Contact.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className={styles.contact}>
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
             
                <Link class={styles.link1} to="/contact">
                  CONTACT
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        <div data-aos="fade-in" class={styles.info}>
          <div className={styles.contactinfo}>
          <br/><br/><br/>
            <h1 class={styles.title}>Contact Me!</h1>
            <p class={styles.desc}>
            Email: sami_oh@berkeley.edu
            <br/>
            <br/>
            Mobile: 714-321-7505
            <br/>
            <br/>
            <a class={styles.link2} href="https://www.linkedin.com/in/samantha-oh-3315b31b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br/>
            <br/>
            <a class={styles.link2} href="https://drive.google.com/file/d/1EomaCp-phZlfEfnNqZw8_C_MhA5yCBEK/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            {/* <br/>
            <br/>
            <a href="https://berkeley.joinhandshake.com/users/20651586" target="_blank" rel="noopener noreferrer">Handshake</a> */}
            </p>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
        </div>

    </div>
  );
}

export default Contact;