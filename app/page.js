import Image from 'next/image'
import styles from './page.module.css'
import IndividualBrief from '@/components/IndividualBrief/page'
export default function HomePage() {
  return (
    <div>
      <div className={styles.heroText}>
        <h1>THE TASST FAMILY</h1>
        <h3>Happy family of five</h3>
      </div>
      <div className={styles.heroImg}>
        <Image src='/family.jpg' fill />
      </div>
      <div className={styles.heading}>
        <h1>KNOW ABOUT US MORE</h1>
      </div>

      <IndividualBrief />
    </div>
  )
}
