import React, { useState } from 'react'
import styles from './Payment.module.css'
import Date from './Date';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Device from './Device';
import Logo from './Logo';

const Parent = () => {

  

    // let [color,setColor] = useState({pr})

  return (
    <div className={styles.body} >
          <Date dt={"30/12/2022"} />
      <Logo lg={"data:image/png;base64,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"} />
      <div style={{backgroundColor:"black",color:"white", display:"inline-block" , padding:"0px 12px"}}><h4>Case Study</h4></div>
      <Heading hd={"Amazon Gift"} />
      <SubHeading sb={"Pay"} />
      <Device de={"Desktop"} />
      <div className={styles.arrow}><h2> > </h2></div>
    </div>
  )
}

export default Parent
