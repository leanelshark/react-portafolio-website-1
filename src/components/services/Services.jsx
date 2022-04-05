import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>

        <div className='service'>
          
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>User Research</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>  
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>User Testing</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>User Experience Design</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>User Interface Design</p>
            </li>

          </ul>

        </div>

        <div className='service'>

          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>HTML5</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>CSS3</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>React</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Node.js</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Express</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>MongoDB</p>
            </li>
          </ul>
        
        </div>

        <div className='service'>
          <div className='service__head'>
           <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Copywriting</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Content Strategy</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Content Creation</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Content Editing</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Content Management</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Content Marketing</p>
            </li>
          </ul>
        
        </div>
      


      </div>
          
    </section>
  )
}

export default Services