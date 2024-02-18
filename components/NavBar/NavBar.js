'use client'

import { useState } from 'react';
import styles from '@/components/NavBar/Navbar.module.css';
import Bars from '../Icons/Bars';
import NavLink from './Navlink';
import Link from 'next/link';
import useScrolled from './scrollFT'; // Import the hook
import Cross from '../Icons/Cross';

export default function NavBar() {

  const [toggleNav, setToggleNav] = useState(false);

  const scrolled = useScrolled();

  function toggleSidebar() {
    setToggleNav(!toggleNav)
    console.log("Sidebar set", toggleNav)
  }
  function closeSidebar() {
    setToggleNav(false);
    console.log("Close sidebar")
  }

  return (
    <>
      {!toggleNav && (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
          <Link className={styles.logo} href='/'>TASST</Link>
          <div className={styles.bars} onClick={toggleSidebar}><Bars /></div>
          <ul className={styles.links}>
            <li>
              <NavLink href='/hierarchy' > Hierarchy</NavLink>
            </li>
            <li>
              <NavLink href='/members' >Members</NavLink>
            </li>
            <li>
              <NavLink href='/residence' >Residence</NavLink>
            </li>
            <li>
              <NavLink href='/gallery' >Gallery</NavLink>
            </li>
          </ul>
        </nav>
      )}

      {toggleNav && (
        <div className={styles.sidebar}>
          <div className={styles.cross} onClick={toggleSidebar}><Cross /></div>
          <Link className={styles.logo} href='/'>TASST</Link>
          <ul>
            <li>
              <NavLink href='/hierarchy' onClick={closeSidebar}> Hierarchy</NavLink>
            </li>
            <li>
              <NavLink href='/members' onClick={closeSidebar}>Members</NavLink>
            </li>
            <li>
              <NavLink href='/residence' onClick={closeSidebar}>Residence</NavLink>
            </li>
            <li>
              <NavLink href='/gallery' onClick={closeSidebar}>Gallery</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
