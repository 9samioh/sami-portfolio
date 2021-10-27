import React, { useEffect } from "react";
import styles from "../styles/Omega.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Omega = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className={styles.omega}>
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
          <h1 class={styles.head}>Omega Packaging</h1>
          <p class={styles.desc}>Company: Omega Packaging<br/>
            Position: Website Designer + Developer
          </p>
          <img
          data-aos="fade-in"
          class={styles.omegascreen}
          src="images/omegascreen.png"
          alt=""
          /> 
        </div>
      </div>
      <div data-aos="fade-in" class={styles.product}>
            <h1 class={styles.productt}>Product</h1>
            <p class={styles.productd}>Omega Packaging is a plastic packaging company based in Orange County.  Their old website was coded in bare HTML with little-to-no CSS :0  
            </p>
      </div>
      <div data-aos="fade-in" class={styles.job}>
            <p class={styles.productd}>My instruction was to keep all of the website information the same, just make it look slightly better (without looking flashy).  The purpose of the website is solely for companies looking for information such as jar sizing and availability, rather than individuals being sold on a product. 
            </p>
      </div>
      
      <img
          data-aos="fade-in"
          class={styles.screen}
          src="images/ohome.png"
          alt=""
      /> 
      <img
          data-aos="fade-in"
          class={styles.screen}
          src="images/omegascreen.png"
          alt=""
          /> 
      <img
          data-aos="fade-in"
          class={styles.screen}
          src="images/ofaq.png"
          alt=""
      /> 
      <img
          data-aos="fade-in"
          class={styles.screen}
          src="images/onews.png"
          alt=""
          /> 
      <p class={styles.xdesc2}>
          You can visit the website here!
        </p>
        <a target="_blank" rel="noopener noreferrer" href="http://www.omegapkg.com/" class={styles.screenlink}>
          LET'S GO!
        </a>


          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
               
                <Link to="/buildabear" class={styles.aaa}>
                  </Link>
                  <Link to="/findyourzen" class={styles.code}>
                  </Link>
                  <Link to="/nbjc" class={styles.bp}>
                    <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Link> 
            </div>
          </div>
      
          <p class={styles.xdesc3}>
          go to top
        </p>
        <Link to="/omega">
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

export default Omega;