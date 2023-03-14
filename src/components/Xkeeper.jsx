import React, { useEffect } from "react";
import styles from "../styles/XKeeper.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";
import xkeeperscreens from "../xkeeperscreens.png"
import ActionAreaCard from "./ActionAreaCard";



const Xkeeper = (props) => {
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
          <h1 class={styles.head}>XKeeper</h1>
          <p class={styles.desc}>Company: Jiran Software<br/>
            Position: UI/UX Design Intern
          </p>
        </div>
        <img
          data-aos="fade-in"
          class={styles.xkeeperscreens}
          src={xkeeperscreens}
          alt=""
          /> 

      </div>
        
      <div data-aos="fade-in" class={styles.info}>
        <div data-aos="fade-in" className={styles.productinfo}>
          <div data-aos="fade-in" class={styles.product}>
            <h1 class={styles.productt}>Product</h1>
            <p class={styles.productd}>XKeeper is a Korean parental control<br/>app that allows for parents to have<br/>better control over their child’s mobile<br/>usage such as browser history, screen<br/>time usage, and location.
            </p>
          </div>
          <img
                    class={styles.productp}
                    src="images/xproduct.png"
                    alt=""
          />
        </div>

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Problem</h1>
            <p class={styles.productd}>The app has been receiving a lot of negative feedback from younger users that view it as controlling and an invasion of privacy.  Their app also doesn’t support iOS because of Apple’s limitations on privacy, however competitors do offer options for iOS with limited functionality.  
            </p>
        </div>

        <div data-aos="fade-in" class={styles.testing}>
          <h1 class={styles.productt}>User Testing</h1>
          <p class={styles.productd}>I spent two weeks conducting research on the XKeeper app as well as the six main competitors on Android and iOS.  After comparing costs, device compatibility, features, and user experience, our team decided that Wondershare Famisafe was the biggest competitor.  
          </p>
        </div>

        <img
          data-aos="fade-in"
          class={styles.similarservices}
          src="images/similarservices.png"
          alt=""
        />
        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xoverview.png"
          alt=""
        />          

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Note #1</h1>
            <p class={styles.productd}>Put more focus on giving children rewards and having strong safety features so that there’s an incentive for both parties, not just the parents.  Every app has a different brand image and XKeeper should be marketed as a child safety app instead of an app for helicopter parents.
            </p>
        </div>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xfeature.png"
          alt=""
        />     

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Note #2</h1>
            <p class={styles.productd}>XKeeper is one of the only services that provides communication between parent and child when requesting access to an app or more screen time.  This gave me the idea to use the app as a complete communication platform between parents and their children. 
            </p>
        </div>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xutesting.png"
          alt=""
        /> 
        <ul class={styles.notes}>
          <li>The note feature lets children have more control on the app</li>
            <ul>
              <li>They can send a note to explain their request and parents can send a note to explain why they denied a request, increasing communication on the app</li>
            </ul>
          <br/>
          <li>Based on user feedback from testing the app, we found that the notifications disappeared too quickly</li>
          <br/>
          <li>I introduced the idea of a task list and reward system in order to increase engagement on the app</li>
            <ul>
            <li>This will further the image of XKeeper being a communication and safety platform necessary for young children with smartphones</li>
            <li>If children can engage with the app and recieve benefits such as extra screentime when homework is done, they have a reason to want the XKeeper app more than other parental control apps</li>
            </ul>
          <br/>
          <li>Lastly, I wanted to emphasize the safety features of this app, which I noticed many competitors were doing</li>
            <ul>
            <li>Quick access to a panic button would create more functionality and appeal to a younger user</li>
            <li>I also thought a low battery alert would be helpful for parents to know if their child’s phone was actually dead or just turned off</li>
            <li>(I was also once a young child with a tracking app installed on my phone... we’ve all been there)</li>
            </ul>
        </ul>

        <div data-aos="fade-in" class={styles.problem}>
            <h1 class={styles.productt}>Designs: Child App</h1>
            <p class={styles.productd}>My team wanted the new designs to include more engaging designs for younger users such as cartoons, fun graphics, and encouraging messages.
            </p>
        </div>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xicons1.png"
          alt=""
        /> 

        <p class={styles.xdesc}>
          I first made these navbar icons using a lot lines and gradients.  They looked very messy and inconsistent but thankfully my design leader was super supportive and sent me a helpful link to icon styles. (she even went out of her way to find one in english :’) )  We decided that these flat, two-toned icons would be most fitting for the playful style we were going for.        
        </p>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xicons2.png"
          alt=""
        /> 

        <p class={styles.xdesc2}>
          Here are all the random icons I made, many didn’t end up being used but it gave me a lot of practice with Illustrator!
        </p>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xicons.png"
          alt=""
        /> 

        <p class={styles.xdesc2}>
        We had a hard time choosing between human and non-human designs, but ended up going with the more fictional, youthful designs.        
        </p>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xscreens.png"
          alt=""
        /> 

        <p class={styles.xdesc2}>
          I was the youngest member of the design team, so I think they were mostly interested to see what “youthful” designs I would come up with.  I really enjoyed the task of turning a message that says “you ran out of screen time for the day” into a fun cartoon that says “woohoo! go outside and try a new activity!”
        </p>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xdrawings.png"
          alt=""
        /> 

        <p class={styles.xdesc2}>
          This was my first set of designs for the app, and again I felt like it was very cluttered and messy.  I recieved design critique and decided to focus more on clean designs with cartoons as background images.
        </p>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xbefore.png"
          alt=""
        /> 

        <p class={styles.xdesc2}>
          These were my final designs! In the critique I received feedback to focus on creating a more intuitive design and using less harsh colors.  The team that I was working under said they really enjoyed my child-like taste (LOL) and that the designs were much cleaner!
        </p>

        <img
          data-aos="fade-in"
          class={styles.overview}
          src="images/xafter.png"
          alt=""
        /> 

        <p class={styles.xdesc2}>
          You can play around with the app wireframes here!
          (if you click on the screen it will highlight the clickable areas in blue)
        </p>
        <a target="_blank" rel="noopener noreferrer" href="https://xd.adobe.com/view/30f21b19-380d-4661-8fd1-aade8bfe073e-65a1/" class={styles.screenlink}>
          TRY ME OUT!
        </a>

        <img
          data-aos="fade-in"
          class={styles.girl}
          src="images/xgirl.png"
          alt=""
        /> 

          <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
            <div data-aos="fade-in" className={styles.clubs}>
            <h1 className={styles.clubtitle}>You Might Be Interested In</h1>
            <div className={styles.club}>
              <ActionAreaCard id="BSC"/>
              <ActionAreaCard id="cadence"/>
              <ActionAreaCard id="omega"/>
            </div>
          </div>
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

export default Xkeeper;