import React, { useEffect } from "react";
import styles from "../styles/Cadence.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import cadence1 from "../cadence1.png"
import cadence2 from "../cadence2.png"
import cadence3 from "../cadence3.png"
import cadence4 from "../cadence4.png"
import cadence5 from "../cadence5.png"
import cadence6 from "../cadence6.png"
import cadence8 from "../cadence8.png"

import ActionAreaCard from "./ActionAreaCard";



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
            <h1 class={styles.productt}>Summer 2022</h1>
            <p class={styles.productd}>I worked on Cadence’s frontend engineering team, taking features from beginning to end in cycles of 6 weeks for their remote patient monitoring application.  I worked on a lot of tech debt sprints to clean up the application in small features, and below are three large, clinician-facing features I worked on!
            </p>
      </div>
      <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Multi-select Location</h1>
            <p class={styles.productd}>Because clinicians could only filter patients by a singular hospital name, they found it extremeley difficult to look through patients when they often had patients from multiple hospitals.  After working closely with designers on the team, I developed the multi-select filtering for hospital locations.  This feature was actually deployed shortly after I left the company, and it was exciting to hear about the feedback and impact that this had made on the clinicians' workflows.  
            </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={cadence8}
          alt=""
          /> 
                  <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={cadence2}
          alt=""
          /> 

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Priority Alerts</h1>
            <p class={styles.productd}>I worked on the alerts team for one cycle during the summer, and we developed three different alert priorities for clinicians to better prioritize patients.  Each of the alert thresholds were calculated based on the patient's specific chronic illness (ex: Type 2 Diabetes or Hypertension) and then shown by three different icons.  The icons also had multiple variants and hover states to describe more detail about the readings on first glance.
            </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={cadence3}
          alt=""
          /> 

<div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Form Error Messages</h1>
            <p class={styles.productd}>My first big feature that I worked on was creating error messages for medical forms filled out by clinicians.  I added in-line error messages, red titles, and red outlines to the schema driven forms as well as descriptive error messages on the side, shown on submission.  
            </p>
        </div>
        <div class={styles.flex}>
          <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={cadence4}
          alt=""
          /> 
                  <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={cadence5}
          alt=""
          /> 
        </div>
        
                  <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={cadence6}
          alt=""
          /> 

      <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
              <ActionAreaCard id="BSC"/>
              <ActionAreaCard id="xkeeper"/>
              <ActionAreaCard id="omega"/>
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