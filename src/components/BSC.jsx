import React, { useEffect } from "react";
import styles from "../styles/BSC.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";
import bsc1 from "../bschome.png"
import bsc2 from "../bsc2.png"
import bsc3 from "../bsc3.png"
import bsc4 from "../bsc4.png"
import bsc5 from "../bsc5.png"
import bsc6 from "../bsc6.png"
import bsc7 from "../bsc7.png"
import bsc8 from "../bsc8.png"
import ActionAreaCard from "./ActionAreaCard";


const BSC = (props) => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className={styles.xkeeper}>
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
          <h1 class={styles.head}>Berkeley Student Cooperative</h1>
          <p class={styles.desc}>Organization: UC Berkeley Blueprint<br/>
            Position: Full Stack Developer
          </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={bsc1}
          alt=""
          /> 

      </div>
        
      <div data-aos="fade-in" class={styles.info}>
        <div data-aos="fade-in">
          <div data-aos="fade-in" class={styles.prod1}>
            <h1 class={styles.productt}>Product</h1>
            <p class={styles.productd}>The Workshift App has 3 different user groups: Members, Managers, and Supervisors.          </p>
            
          </div>
          <div data-aos="fade-in" class={styles.prod}>
          <div data-aos="fade-in" class={styles.product}>
            <h2 class={styles.productt}>Managers</h2>
            <p class={styles.productd}>- Create shifts <br/> 
            - Input house lists (house member users)<br/> 
            - View member users’ availabilities and workshift preferences<br/> 
            - Assign member users to shifts<br/> 
            - Track member users workshift hours</p>
          </div>
          <div data-aos="fade-in" class={styles.product}>
          <h2 class={styles.productt}>Supervisors</h2>
            <p class={styles.productd}>
            - Same as managers with the ability to view other houses and promote members to manager</p>
          </div>
          <div data-aos="fade-in" class={styles.product}>
            <h2 class={styles.productt}>Members</h2>
            <p class={styles.productd}>- Submit their availabilities and workshift preferences <br/> 
            - View the workshift assigned to them throughout the week<br/> 
            - Track their own workshift hours<br/> 
            - Submit verification for other member workshifts upon completion (witness PIN)
<br/> </p>
          </div>
        </div>
        </div>

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Problem</h1>
            <p class={styles.productd}>Currently, it’s plagued by technical issues that make it difficult to navigate and use at a large scale.  Because of these issues, some managers have resorted to using excel sheets to match members with shifts.  With some houses having over 100 members, this has become a huge painpoint for managers. 
            </p>
        </div>
        <div class={styles.club}>
                  <img
          data-aos="fade-in"
          class={styles.smallimg}
          src={bsc7}
          alt=""
          /> 
                  <img
          data-aos="fade-in"
          class={styles.smallimg}
          src={bsc8}
          alt=""
          /> 
        </div>


        <div data-aos="fade-in" class={styles.testing}>
          <h1 class={styles.productt}>Rebuilding</h1>
          <p class={styles.productd}>Rebuilding the workshift application will allow managers to create and assign shifts for the semester, while residents can verify shifts, submit preferences, and modify their availabilities.
<br/> <br/>Below are some key features that I've been implementing throughout the project!
          </p>
        </div>    

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Shift Creation</h1>
            <p class={styles.productd}>Managers can create shifts to assign to members by submitting this form
            </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={bsc2}
          alt=""
          /> 

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Shift Assigment</h1>
            <p class={styles.productd}>Managers can assign shifts to members by clicking on available members.  When ideating this application, I came up with the idea to filter members by their availibility, showing only members that can complete the shift at this time.  I also suggested we include shift preferences for members, so that we can order them by preference as well as needed hours. 
            </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={bsc3}
          alt=""
          /> 

<div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Login Page</h1>
            <p class={styles.productd}>All three users have the same login page, where their credentials are authenticated and then redirects them to their home page.
            </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={bsc5}
          alt=""
          /> 

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Editing House Member's Information</h1>
            <p class={styles.productd}>Managers can easily edit the information of members in their house. 
            </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={bsc4}
          alt=""
          /> 

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Member Settings</h1>
            <p class={styles.productd}>Members can input or edit their own information. 
            </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={bsc6}
          alt=""
          /> 
   

        <div data-aos="fade-in" class={styles.problem}>
            <p class={styles.productd}>This workshift application is currently being developed and will be deployed at the end of the Spring 2023 semester!!
            </p>
            <p class={styles.productd}>Read this article released by the club!
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/blueprint/berkeley-student-cooperative-a-project-overview-cfc07b7113a4" class={styles.screenlink}>
          LET'S GO!
        </a>
        </div>

          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
              <ActionAreaCard id="cadence"/>
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
    </div>
  );
}

export default BSC;