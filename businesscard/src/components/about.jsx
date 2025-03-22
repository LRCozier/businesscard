import React from "react";
import profilepic from "../images/profilepic.jpeg"

const About = () => {

  return (
    <>
    <section>
      <h1>Luke Alexander Rudderham-Cozier</h1>
      <img src={profilepic} alt="profile-pic"/>
      <h2>Front End Engineer & Personal Trainer</h2>
      <p>A dedicated Front-End Developer and Personal Trainer, driven by a passion for creating positive, 
        seamless experiences—whether in the digital space or personal well-being. With a keen eye for detail 
        and a commitment to excellence, I craft user-friendly interfaces and tailor fitness solutions that 
        empower and inspire. Always eager to grow, I stay up to date with the latest technologies and training 
        methods to bring fresh, innovative approaches to everything I do.</p>
    </section>
    </>
  )
}

export default About;