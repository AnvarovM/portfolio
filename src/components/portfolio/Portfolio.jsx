import React from 'react';
import './portfolio.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// images
import ShareMe from '../../assets/portfolio/share-me.jpeg';
import IdealCleaning from '../../assets/portfolio/idealcleaning.jpeg';
import GoogleCalendar from '../../assets/portfolio/google-calendar.jpeg';
import TodoIst from '../../assets/portfolio/todoist.jpeg';
import Amazon from '../../assets/portfolio/amazon.jpeg';
import Movie from '../../assets/portfolio/movieapp.jpeg';
import JizzaxCity from '../../assets/portfolio/jizzaxcity.jpeg';
import JQuruvchi from '../../assets/portfolio/jquruvchi.jpeg';
import Airbnb from '../../assets/portfolio/airbnb.jpeg';
import Windows from '../../assets/portfolio/windows.jpeg';

const portfolioData = [
  {
    id: 1,
    image: ShareMe,
    title: 'Share me app',
    github: 'https://github.com/AnvarovM/Share-me',
    demo: 'https://shareme-anvarov.netlify.app/'
  },
  {
    id: 2,
    image: IdealCleaning,
    title: 'Ideal Cleaning`s website',
    github: 'https://github.com/AnvarovM/ideal-cleaning',
    demo: 'https://ideal-cleaning.vercel.app/b'
  },
  {
    id: 1241,
    image: Movie,
    title: 'Movie App',
    github: 'https://github.com/AnvarovM/Movie-app',
    demo: 'https://movie-app-roan-five.vercel.app/'
  },
  {
    id: 3,
    image: GoogleCalendar,
    title: 'Goggle Calendar Clone',
    github: 'https://github.com/AnvarovM/google-calendar',
    demo: 'https://google-calendar-clone.vercel.app/'
  },
  {
    id: 4,
    image: TodoIst,
    title: 'Todoist Clone',
    github: 'https://github.com/AnvarovM/todoist-clone',
    demo: 'https://todoist-clone-beta.vercel.app/'
  },
  {
    id: 5,
    image: JizzaxCity,
    title: 'Jizzax City`s Website',
    github: 'https://github.com/AnvarovM/Jizzaxcity.uz',
    demo: 'https://jizzaxcity-uz.vercel.app'
  },
  {
    id: 6,
    image: Amazon,
    title: 'Amazon Clone Website',
    github: 'https://github.com/AnvarovM/Amazon-clone',
    demo: 'https://amazon-clone-flame-ten.vercel.app/'
  },
  {
    id: 7,
    image: JQuruvchi,
    title: 'JQuruvchi`s Website',
    github: 'https://github.com/AnvarovM/Jquruvchi.uz-',
    demo: 'https://jquruvchi.uz'
  },
  {
    id: 8,
    image: Airbnb,
    title: 'Airbnb Clone Website',
    github: 'https://github.com/AnvarovM/Airbnb-clone',
    demo: 'https://airbnb-clone-eight-ochre.vercel.app/'
  },
  {
    id: 9,
    image: Windows,
    title: 'Windows 10 OS',
    github: 'https://github.com/AnvarovM/my-os',
    demo: 'https://windows-os.vercel.app/',
    small: 'Not ready yet'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, github, demo, small }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <LazyLoadImage src={image} alt={title} effect="blur" />
              </div>
              <h3>{title}</h3>
              {/* <small>{small}</small> */}
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Git Hub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
