import styles from '@/components/NavBar/Navbar.module.css'
import Bars from '../Icons/Bars'
import NavLink from './Navlink'
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
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
  )
}
