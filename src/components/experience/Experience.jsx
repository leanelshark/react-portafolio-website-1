import React from 'react'

import './experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className=' container experience__container'>
        <div className='experience-item'>
          <h3>Front-End Developer</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>

          </div>
        </div>

       
          
      </div>


    </section>
  )
}

export default Experience