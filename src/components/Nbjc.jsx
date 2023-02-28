import React, { useEffect } from "react";
import styles from "../styles/Nbjc.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Nbjc = () => {
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
          <h1 class={styles.head}>NBJC</h1>
          <p class={styles.desc}>Organization: UC Berkeley Blueprint<br/>
            Position: Developer
          </p>
          <img
          data-aos="fade-in"
          class={styles.omegascreen}
          src="images/nbjcscreen.png"
          alt=""
          /> 
        </div>
      </div>
      <div data-aos="fade-in" class={styles.product}>
            <h1 class={styles.productt}>NBJC</h1>
            <p class={styles.productd}>National Black Justice Coalition is a civil rights organization based in Washington, D.C. dedicated to empowering Black LGBTQ/SGL+ and people living with HIV/AIDS through federal public policy advocacy. Founded in 2003, NBJC has provided leadership at the intersection of national civil rights groups and LGBTQ/SGL+ organizations, advocating for the unique challenges and needs of this community that are often relegated to the sidelines.
            </p>
      </div>
      <div data-aos="fade-in" class={styles.job}>
        <h1 class={styles.productt}>Our Team</h1>
            <p class={styles.productd}>Blueprint partners with different NPO’s every year to help build beautiful technology for nonprofits that we want to contribute to.  I joined the NBJC team in the Spring 2021 semester as a developer.  
            </p>
            <p class={styles.productd}>Project Leader: Calvin Chen<br/>
Designer: Elizabeth Wu<br/>
Developers: Samantha Oh, Bryanna Gavino, Cindy Zhang, Frederick Kim, Gabe Espinosa, Sonja Johanson
            </p>
      </div>
      <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/nbjcteam.png"
          alt=""
        />

      <div data-aos="fade-in" class={styles.job}>
        <h1 class={styles.productt}>Product</h1>
            <p class={styles.productd}>We created a public-facing web application for NBJC where organizations that staff has approved can enter their information so that they can be easily found by users on the platform. NBJC staff has the ability to moderate and remove organizations from the platform if necessary. Organizations on the platform also have the ability to raise awareness about cultural or political events they are hosting while benefiting from a network of similar groups. The aim is to help individuals find and contribute to local organizations that are working to help Black LGBTQ/SGL+ and other marginalized communities.
            </p> 
      </div>

      <div data-aos="fade-in" class={styles.product}>
            <h1 class={styles.productt}>Key Features</h1>
            <p class={styles.productd}>These are the key features of the website that were fully designed and developed throughout Fall 2020 - Spring 2021.  We are still ongoing the handoff process as NBJC is working to integrate it into their home page website.  
            </p>
      </div>

      <div data-aos="fade-in" class={styles.job}>
        <h1 class={styles.productt}>1. Authentication/ User Roles</h1>
            <p class={styles.productd}>The application has three types of users: organizations, moderators, and admins.  
            </p> 
      </div>
      <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/nbjc1.png"
          alt=""
        />

      <div data-aos="fade-in" class={styles.job}>
        <h1 class={styles.productt}>2. Homepage- Organization List</h1>
            <p class={styles.productd}>This is the first page a public user will see upon visiting the application.
            </p> 
      </div>
      <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/nbjc2.png"
          alt=""
        />

      <div data-aos="fade-in" class={styles.job}>
        <h1 class={styles.productt}>3. Organization Dashboard</h1>
            <p class={styles.productd}>This is the first page an organization user already on the platform will see upon signing into the application.
            </p> 
      </div>
      <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/nbjc3.png"
          alt=""
        />

      <div data-aos="fade-in" class={styles.job}>
        <h1 class={styles.productt}>4. Moderator Dashboard</h1>
            <p class={styles.productd}>This is the first page a moderator will see upon signing into the application.
            </p> 
      </div>
      <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/nbjc4.png"
          alt=""
        />

      <div data-aos="fade-in" class={styles.job}>
        <h1 class={styles.productt}>5. Admin Dashboard</h1>
            <p class={styles.productd}>This is the first page an admin will see upon signing into the application.
            </p> 
      </div>
      <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/nbjc5.png"
          alt=""
        />

      <div data-aos="fade-in" class={styles.job}>
        <h1 class={styles.productt}>6. Events List</h1>
            <p class={styles.productd}>Events posted by organizations will be viewable by the public on the Events page. Basic information such as the title, date(s), location (optional), type of event, summary will be displayed in a list. Upon clicking one of events, more detail about the organization will be displayed
            </p> 
      </div>
      <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/nbjc6.png"
          alt=""
        />
        <br/>
        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/nbjc7.png"
          alt=""
        />
      
      


          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
               
                <Link to="/bloom" class={styles.aaa}>
                  </Link>
                  <Link to="/xkeeper" class={styles.code}>
                  </Link>
                  <Link to="/omega" class={styles.bp}>
                    <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

export default Nbjc;