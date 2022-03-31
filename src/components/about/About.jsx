import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>

      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">


        <div className="about__me">

          <img className="about__me-image" src={ME} alt="About" />

        </div>

        <div calssName="about__content">

            <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon"/>
                  <h5>Experience</h5>
                  <small>2+ Years Working</small>
                </article>

                <article className="about__card">
                  <FiUsers className="about__icon"/>
                  <h5>Clients</h5>
                  <small>50+ Worlwide</small>
                </article>

                <article className="about__card">
                  <VscFolderLibrary className="about__icon"/>
                  <h5>Projects</h5>
                  <small>20+ Completed</small>
                </article>  
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos tempora delectus officiis rem dicta, sapiente esse iste veritatis fuga atque temporibus quisquam aliquid, ratione consectetur? Nulla explicabo quasi repellendus.</p>

            <a href="#contact" className="btn btn-primary">Lets Talk</a>
            
        </div>

      
      </div>


    </section>
  )
}

export default About