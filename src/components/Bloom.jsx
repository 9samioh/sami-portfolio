import React, { useEffect } from "react";
import styles from "../styles/Bloom.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Bloom = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
<div className={styles.buildabear}>
      <div className={styles.top}>
        <div className={styles.navigation}>
          <nav class={styles.navbar}>
            <div class={styles.navLinks}>

              <div>
                <ul class={styles.links}>
                    <Link class={styles.link1} to="/">
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

        <div data-aos="fade-in" class={styles.title}>
          <h1 class={styles.head}>BLOOM</h1>
          <p class={styles.desc}>Organization: UC Berkeley Blueprint<br/>
            Position: External Director
          </p>
          <img
          data-aos="fade-in"
          class={styles.omegascreen}
          src="images/bloomscreen.png"
          alt=""
          /> 
        </div>
      </div>
      <div data-aos="fade-in" class={styles.product}>
            <h1 class={styles.productt}>Project</h1>
            <p class={styles.productd}>Bloom is a social good mentorship program created by Blueprint. We designed it as a space for Berkeley students to connect with mentors in the social good space. Through Bloom, we hope to grow and build a supportive community of learners, advocates, and leaders.  We are currently in the process of launching our first round of mentors and mentees!
            </p>
      </div>
      
      


          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
               <Link to="/xkeeper" class={styles.code}>
                  </Link>
                  <Link to="/omega" class={styles.bp}>
                    <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Link> 
                <Link to="/buildabear" class={styles.aaa}>
                  </Link>
                  
            </div>
          </div>
      
          <p class={styles.xdesc3}>
          go back
        </p>
        <Link to="/">
        <img
          data-aos="fade-in"
          class={styles.scrollup}
          src="images/scrollup.png"
          alt=""
        /> 
        </Link>
    </div>
  );
}

export default Bloom;