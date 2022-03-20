import React from 'react';
import classes from './icecream.module.css';
import Scoop from './scoop/scoop';
export default function icecream({scoops}) {

  return (
    <div>
            <div className={classes.icecream}>
              <p className={classes.cone}></p>
              {/* <p>Please start adding scoops</p> */}
              {scoops.map(scoop => <Scoop key={`${scoop}${Math.random()}`} scoop={scoop}/>)}
              <div className={classes.cherry}></div>
            </div>
    </div>
  )
}
