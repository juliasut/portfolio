import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from './home/Toggler';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { info } from '../info/Info';

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'home',
  },
  {
    name: 'About Me',
    to: '/about',
    active: 'about',
  },
  {
    name: 'Portfolio',
    to: '/portfolio',
    active: 'portfolio',
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === '/'
      ? 'home'
      : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <Box component={'nav'} width={'100%'}>
      <Box
        component={'ul'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ xs: '2rem', md: '8rem' }}
        textTransform={'uppercase'}
        fontSize={'1rem'}
        fontWeight={'700'}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={'li'}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}
          >
            <Link
              to={link.to}
              onClick={() => setActive(link.active)}
              className={Style.link}
            >
              <p style={{ padding: '0.8rem 0' }}>{link.name}</p>
            </Link>
          </Box>
        ))}
        <li>
          <a href="https://resume.creddle.io/resume/83flah7esyq">résumé</a>
        </li>
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
