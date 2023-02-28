import React, { useEffect } from "react";
import styles from "../styles/Work.module.css"
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import bsccover from "../bsc.png"
import cadencecover from "../cadencecover.png"
import xkeepercover from "../xkeepercover.png"
import omegacover from "../omegacover.png"
import buildabearcover from "../buildabearcover.png"
import findyourzencover from "../findyourzencover.png"
import nbjccover from "../nbjccover.png"
import bloomcover from "../bloomcover.png"
import aboutbkgd from "../aboutbkgd.png"


const Work = (props) => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <body>
    <div className={styles.work}>
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
      <div data-aos="fade-in" className={styles.me}>
          <br/><br/>
          <div class={styles.left}>
            <div class={styles.covertext}>
              <h1 class={styles.hello}>Hello! <br/> My name is <br/> Sami Oh</h1>
              <p class={styles.description}>
                I am an aspiring Software Engineer  <br/>and UI/UX Designer
              </p>
            </div>
            <img
              data-aos="fade-in"
              class={styles.cover}
              src={aboutbkgd}
              alt=""
              /> 
            
          </div>
          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          {/* <a data-scroll href="#projects">click</a> */}

          <br/><br/><br/>
        </div>
      <div data-aos="fade-in" id="projects">
        <h1 class={styles.title}>Recent Work</h1>
      </div>
      <div data-aos="fade-in" class={styles.covers}>
        <div data-aos="fade-in" class={styles.leftside}>
          <img
          data-aos="fade-in"
          class={styles.leftimage}
          src={bsccover}
          alt=""
          /> 
          <div class={styles.leftdesc} data-aos="fade-in">
            <h1 class={styles.lefttitle}>Berkeley Student Cooperative</h1>
            <p class={styles.desc2left}>Created a workshift application for 1000+ students and managers living in affordable housing.</p>
            <Link class={styles.here2left} to="/bsc"> &lt;&lt; VIEW<span class="sr-only"></span></Link>
          </div>
          
        </div>


        <div data-aos="fade-in" class={styles.rightside}>
          <div class={styles.rightdesc} data-aos="fade-in">
            <h1 class={styles.righttitle}>Cadence Solutions</h1>
            <p class={styles.desc2right}>Developed a clinician facing application for a Remote Patient Monitoring startup.</p>
            <Link class={styles.here2right} to="/cadence">VIEW &gt;&gt;<span class="sr-only"></span></Link>
          </div>
          <img
          data-aos="fade-in"
          class={styles.rightimage}
          src={cadencecover}
          alt=""
          /> 
        </div>

        <div data-aos="fade-in" class={styles.leftside}>
          <img
          data-aos="fade-in"
          class={styles.leftimage}
          src={xkeepercover}
          alt=""
          /> 
          <div class={styles.leftdesc} data-aos="fade-in">
            <h1 class={styles.lefttitle}>XKeeper by Jiran</h1>
            <p class={styles.desc2left}>Redesign of a Korean parental control app to focus on safety features.</p>
            <Link class={styles.here2left} to="/xkeeper"> &lt;&lt; VIEW<span class="sr-only"></span></Link>
          </div>
          
        </div>

        <div data-aos="fade-in" class={styles.rightside}>
          <div class={styles.rightdesc} data-aos="fade-in">
            <h1 class={styles.righttitle}>Omega Packaging</h1>
            <p class={styles.desc2right}>Packaging company website redesign to create a more customer focused expereince.</p>
            <Link class={styles.here2right} to="/omega">VIEW &gt;&gt;<span class="sr-only"></span></Link>
          </div>
          <img
          data-aos="fade-in"
          class={styles.rightimage}
          src={omegacover}
          alt=""
          /> 
        </div>

        <div data-aos="fade-in" class={styles.leftside}>
          <img
          data-aos="fade-in"
          class={styles.leftimage}
          src={buildabearcover}
          alt=""
          /> 
          <div class={styles.leftdesc} data-aos="fade-in">
            <h1 class={styles.lefttitle}>Build-a-Bear</h1>
            <p class={styles.desc2left}>Co-led a personal portolio website project teaching design and development skills in UC Berkeley Codeology.</p>
            <Link class={styles.here2left} to="/buildabear"> &lt;&lt; VIEW<span class="sr-only"></span></Link>
          </div>
          
        </div>

        <div data-aos="fade-in" class={styles.rightside}>
          <div class={styles.rightdesc} data-aos="fade-in">
            <h1 class={styles.righttitle}>Find Your Zen</h1>
            <p class={styles.desc2right}>Designed and developed a student wellness app on iOS in UC Berkeley Codology.</p>
            <Link class={styles.here2right} to="/findyourzen">VIEW &gt;&gt;<span class="sr-only"></span></Link>
          </div>
          <img
          data-aos="fade-in"
          class={styles.rightimage}
          src={findyourzencover}
          alt=""
          /> 
        </div>

        <div data-aos="fade-in" class={styles.leftside}>
          <img
          data-aos="fade-in"
          class={styles.leftimage}
          src={nbjccover}
          alt=""
          /> 
          <div class={styles.leftdesc} data-aos="fade-in">
            <h1 class={styles.lefttitle}>National Black <br/> Justice Coalition</h1>
            <p class={styles.desc2left}>Moderator and organization platform to engage and empower Black LGBTQ SGL+ communities.</p>
            <Link class={styles.here2left} to="/nbjc"> &lt;&lt; VIEW<span class="sr-only"></span></Link>
          </div>
          
        </div>

        <div data-aos="fade-in" class={styles.rightside}>
          <div data-aos="fade-in" class={styles.rightdesc}>
            <h1 class={styles.righttitle}>Bloom</h1>
            <p class={styles.desc2right}>Social good mentorship program for students to recieve professional advice through UC Berkeley Blueprint.</p>
            <Link class={styles.here2right} to="/bloom">VIEW &gt;&gt;<span class="sr-only"></span></Link>
          </div>
          <img
          data-aos="fade-in"
          class={styles.rightimage}
          src={bloomcover}
          alt=""
          /> 
        </div>

        
      </div>
    </div>

    </body>
    
  );
}

export default Work;