import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import styles from "../styles/ActionAreaCard.module.css"
import bsc1 from "../bsc.png"
import cadence from "../cadencecover.png"
import xkeeper from "../xkeepercover.png"
import omega from "../omegacover.png"
import bp from "../bp.png"
import aaa from "../aaa.png"
import codeo from "../codeo.png"


import { Link } from "react-router-dom";




export default function ActionAreaCard(id) {
  if (id.id === 'BSC') {
    return (
      <div class={styles.card}>
        <Card class={styles.actioncard}>
        <Link class={styles.here2left} to="/bsc">
        <CardActionArea >
          <CardMedia
            component="img"
            height='auto'
            image={bsc1}
          />
          <CardContent>
            {/* <div class={styles.content}> */}
            <h1 class={styles.lefttitle}>Berkeley Student Coop</h1>
            <Link class={styles.here2left} to="/bsc"> Learn More<span class="sr-only"></span></Link>
            {/* </div> */}
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
      </div>
      
    );
  }
  if (id.id === 'cadence') {
    return (
      <div class={styles.card}>
        <Card class={styles.actioncard}>
        <Link class={styles.here2left} to="/cadence">
        <CardActionArea >
          <CardMedia
            component="img"
            height='auto'
            image={cadence}
          />
          <CardContent>
            <h1 class={styles.lefttitle}>Cadence</h1>
            <Link class={styles.here2left} to="/cadence"> Learn More<span class="sr-only"></span></Link>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
      </div>
      
    );
  }
  if (id.id === 'xkeeper') {
    return (
      <div class={styles.card}>
        <Card class={styles.actioncard}>
        <Link class={styles.here2left} to="/xkeeper">
        <CardActionArea >
          <CardMedia
            component="img"
            height='auto'
            image={xkeeper}
          />
          <CardContent>
            <h1 class={styles.lefttitle}>XKeeper</h1>
            <Link class={styles.here2left} to="/xkeeper"> Learn More<span class="sr-only"></span></Link>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
      </div>
      
    );
  }
  if (id.id === 'omega') {
    return (
      <div class={styles.card}>
        <Card class={styles.actioncard}>
        <Link class={styles.here2left} to="/omega">
        <CardActionArea >
          <CardMedia
            component="img"
            height='auto'
            image={omega}
          />
          <CardContent>
            <h1 class={styles.lefttitle}>Omega</h1>
            <Link class={styles.here2left} to="/omega"> Learn More<span class="sr-only"></span></Link>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
      </div>
      
    );
  }
  if (id.id === 'blueprint') {
    return (
      <div class={styles.clubcard}>
        <Card class={styles.actioncard}>
        <a class={styles.here2left} href="https://calblueprint.org/" target="_blank" rel="noopener noreferrer">
        <CardActionArea >
          <CardMedia
            component="img"
            height='auto'
            image={bp}
          />
          <CardContent>
            <h1 class={styles.lefttitle}>Blueprint</h1>
            <Link class={styles.here2left}> Learn More<span class="sr-only"></span></Link>
          </CardContent>
        </CardActionArea>
        </a>
      </Card>
      </div>
      
    );
  }
  if (id.id === 'aaa') {
    return (
      <div class={styles.clubcard}>
        <Card class={styles.actioncard}>
        <a class={styles.here2left} href="https://www.instagram.com/ucberkeleyaaa/" target="_blank" rel="noopener noreferrer">
        <CardActionArea >
          <CardMedia
            component="img"
            height='auto'
            image={aaa}
          />
          <CardContent>
            <h1 class={styles.lefttitle}>AAA</h1>
            <Link class={styles.here2left}> Learn More<span class="sr-only"></span></Link>
          </CardContent>
        </CardActionArea>
        </a>
      </Card>
      </div>
      
    );
  }
  if (id.id === 'codeo') {
    return (
      <div class={styles.clubcard}>
        <Card class={styles.actioncard}>
        <a class={styles.here2left} href="https://codeology.club/#/" target="_blank" rel="noopener noreferrer">
        <CardActionArea >
          <CardMedia
            component="img"
            height='auto'
            image={codeo}
          />
          <CardContent>
            <h1 class={styles.lefttitle}>Codeology</h1>
            <Link class={styles.here2left}> Learn More<span class="sr-only"></span></Link>
          </CardContent>
        </CardActionArea>
        </a>
      </Card>
      </div>
      
    );
  }
  if (id.id === 'omega') {
    return (
      <div class={styles.card}>
        <Card class={styles.actioncard}>
        <Link class={styles.here2left} to="/omega">
        <CardActionArea >
          <CardMedia
            component="img"
            height='auto'
            image={omega}
          />
          <CardContent>
            <h1 class={styles.lefttitle}>Omega</h1>
            <Link class={styles.here2left} to="/omega"> Learn More<span class="sr-only"></span></Link>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
      </div>
      
    );
  }
  return (
    <div class={styles.card}>
      <Card class={styles.actioncard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={bsc1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
  );
}
