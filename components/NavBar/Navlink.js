'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/components/NavBar/Navlink.module.css'


export default function NavLink({ href, children, onClick }) {

    const path = usePathname(); //Gives the currently active path
    return (
        <Link href={href} onClick={onClick} className={path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link}>{children}</Link>
    )
}
