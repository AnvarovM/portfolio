/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from  'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState('#');
  return (
    <nav>
        <Tooltip  placement="top-start" title="Home">
          <a href="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
          >
            <AiOutlineHome />
          </a>
        </Tooltip>
        <Tooltip  placement="top" title="About">
          <a href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
          >
            <AiOutlineUser />
          </a>
        </Tooltip>
        <Tooltip  placement="top" title="Experience">
          <a href="#experience"
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
          >
            <BiBook />
          </a>
        </Tooltip>
        <Tooltip  placement="top" title="Services">
          <a href="#services"
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
          >
            <RiServiceLine />
          </a>
        </Tooltip>
        <Tooltip  placement="top-end" title="Contact">
          <a href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
          >
            <BiMessageSquareDetail />
          </a>
        </Tooltip>
    </nav>
  )
};

export default Nav;
