import React, { useEffect } from "react";
import styles from "../styles/Findyourzen.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Findyourzen = () => {
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
          <h1 class={styles.head}>FIND-YOUR-ZEN</h1>
          <p class={styles.desc}>Organization: UC Berkeley Codeology<br/>
            Position: Mobile Designer + Developer
          </p>
          <img
          data-aos="fade-in"
          class={styles.omegascreen}
          src="images/findyourzenscreens.png"
          alt=""
          /> 
        </div>
      </div>
      <div data-aos="fade-in" class={styles.product}>
            <h1 class={styles.productt}>Project</h1>
            <p class={styles.productd}>UC Berkeley Codeology hosts projects for new members to learn different areas of development and find their fit in the tech world.  This semester I am co-leading a project that teaches website design and development skills.  All semester, we are giving lessons on Figma, React, HTML, and CSS for each member to design, develop, and deploy a personal website.  
            </p>
      </div>
      <img
          data-aos="fade-in"
          class={styles.omegascreen}
          src="images/findyourzenimages.png"
          alt=""
      /> 
      
      


          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
               <Link to="/nbjc" class={styles.bp}>
                    <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Link> 
                
                  <Link to="/bloom" class={styles.code}>
                  </Link>
                <Link to="/xkeeper" class={styles.aaa}>
                  </Link>  
            </div>
          </div>
      
          <p class={styles.xdesc3}>
          go to top
        </p>
        <Link to="/findyourzen">
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

export default Findyourzen;