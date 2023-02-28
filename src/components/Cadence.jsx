import React, { useEffect } from "react";
import styles from "../styles/Cadence.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import cadence1 from "../cadence1.png"


const Cadence = () => {
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
          <h1 class={styles.head}>Cadence</h1>
          <p class={styles.desc}>Company: Cadence (Solutions)<br/>
            Position: Software Engineer
          </p>
          <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={cadence1}
          alt=""
          /> 
        </div>
      </div>
      <div data-aos="fade-in" class={styles.product}>
            <h1 class={styles.productt}>Last Summer</h1>
            <p class={styles.productd}>I worked on Cadence’s frontend engineering team, taking features from beginning to end in cycles of 6 weeks for their remote patient monitoring application.  One major client-facing feature I saw from end-to-end allowed clinicians to select multiple hospital locations and filter these patients from highest priority to lowest.  I also led the feature for adding in-line form field validation for clinicians filling out patient information.  
            </p>
      </div>
      

          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
               
                
                  <Link to="/findyourzen" class={styles.code}>
                  </Link>
                  <Link to="/nbjc" class={styles.bp}>
                    <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Link> 
                <Link to="/bloom" class={styles.aaa}>
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

export default Cadence;