import React, { useEffect } from "react";
import styles from "../styles/Aboutme.module.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



const AboutMe = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div>
    <head>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </head>

    <body>
    <div>
    <div className={styles.navigation}>
      <nav class={styles.navbar}>
        <div class={styles.navLinks}>

          <div>
            <ul class={styles.links}>
                <Link class={styles.link} to="/">
                  WORK
                </Link>

                <Link class={styles.link1} to="/aboutme">
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
      <div className={styles.about}>
        
        <div data-aos="fade-in" className={styles.aboutinfo}>
          <div className={styles.info}>
            <div className={styles.major}>
              <div className={styles.left2}>
              <img
                  class={styles.mypicture}
                  src="images/mypicture.png"
                  alt=""
              />
              </div>
              <div className={styles.right}>
                <h1 class={styles.infotitle2}>Background</h1>
                <p class={styles.infodescription2}>
                I have a very technical education because of my courses and involvment in two tech clubs on campus.  All of my design skills are from online courses, youtube videos, and a lot of google searches.  I gained experience last summer interning at a software company, doing UI/UX design for their new parental control app.  I’m always looking for more design projects and internship experience to continue growing my skillset!
                </p>
              </div>
            </div>

            <div data-aos="fade-in" className={styles.education}>
              <img
                    class={styles.mypicture}
                    src="images/info.png"
                    alt=""
                />
            </div>

            <div data-aos="fade-in" className={styles.funfact}>
                <h1 class={styles.facttitle}>Fun Fact</h1>
                <p class={styles.factdesc}>
                I used to own a pig in my backyard in Orange County! Since then, I have had a bulldog, two guinea pigs, and a cat.
                </p>
              <img
                    class={styles.pets}
                    src="images/pets.png"
                    alt=""
                />
            </div>

            <div data-aos="fade-in" className={styles.interests}>
              <img
                    class={styles.mypicture}
                    src="images/interests.png"
                    alt=""
                />
            </div>


          </div>

          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>CAMPUS CLUBS</h1>
            <div className={styles.club}>
                  <a class={styles.bp} href="https://calblueprint.org/" target="_blank" rel="noopener noreferrer">
                    <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </a>
                  <a class={styles.aaa} href="https://www.instagram.com/ucberkeleyaaa/" target="_blank" rel="noopener noreferrer">
                  </a>
                  <a class={styles.code} href="https://codeology.club/#/" target="_blank" rel="noopener noreferrer">
                  </a>
            </div>
          </div>

          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>LATEST PROJECTS</h1>
            <div className={styles.project}>
                  <Link class={styles.build} to="/buildabear">
                    <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <span class="sr-only"></span>
                  </Link>
                  <Link class={styles.bloom} to="/bloom">
                    <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <span class="sr-only"></span>
                  </Link>
            </div>
          </div>
        </div>

      </div>
      
        
  </div>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
  </body>
  {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
  </div>
  );
}

export default AboutMe;