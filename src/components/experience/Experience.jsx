import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return <section id="experience">
    <h5>What Skills I Have?</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
        <div className="experience__left">
          <h3>Basic Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Html/Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap/Sass/Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Styled Components/Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Headless CMS/Sanity/StrApi</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git/CI:CD</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Storybook/Formik</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SEO/SSR/Static SSR</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__right">
        <h3>Advanced Development</h3>

        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Javascript/Typescript</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React/Next</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Redux/Context</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Jest/Unit Testing</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GraphQL/Rest Api</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Design Pattern</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Reconciliation Algorithm</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
        </div>
    </div>
  </section>;
};

export default Experience;
