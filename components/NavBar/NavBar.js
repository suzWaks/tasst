'use client'

import React, { useEffect, useState } from 'react';
import styles from '@/components/NavBar/Navbar.module.css';
import Bars from '../Icons/Bars';
import NavLink from './Navlink';
import Link from 'next/link';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link className={styles.logo} href='/'>TASST</Link>
        <div className={styles.bars}><Bars /></div>
        <ul>
          <li>
            <NavLink href='/hierarchy'> Hierarchy</NavLink>
          </li>
          <li>
            <NavLink href='/members'>Members</NavLink>
          </li>
          <li>
            <NavLink href='/residence'>Residence</NavLink>
          </li>
          <li>
            <NavLink href='/gallery'>Gallery</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
