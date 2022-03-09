/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ABOUT_IMG2 from '../../assets/1.jpeg';

const About = () => {
  return <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT_IMG2} alt="about image" />  
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>  
            </article>  

            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>37+ Worldwide</small>  
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>24+ Completed</small>  
            </article>
          </div>  

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis consectetur, itaque consequatur ipsam autem nulla adipisci tempora laudantium, perspiciatis ducimus repellat explicabo architecto praesentium asperiores labore repellendus accusamus provident.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>;
};

export default About;
