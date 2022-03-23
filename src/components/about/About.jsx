import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import sculpture from '../../assets/about.png';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={sculpture} alt="about image" />
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

          <p>
          Experienced Frontend Developer with a demonstrated history of working in the staffing and recruiting industry. Skilled in Next.js, Bootstrap, JavaScript, Redux.js, and Git. Strong engineering professional with a Bachelor's degree focused in Computer Software Engineering from TeamIt academy. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
