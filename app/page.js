import Image from 'next/image'
import styles from './page.module.css'
import IndividualBrief from '@/components/HomePage/IndividualBrief/page'
import ResidenceBanner from '@/components/HomePage/ResidenceBanner/page'
import Footer from '@/components/Footer/page'
export default function HomePage() {
  return (
    <div>
      <div className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>THE TASST FAMILY</h1>
          <h3>Happy family of five</h3>
        </div>
        <div className={styles.image}>
          <Image src='/family.jpg' fill alt='family pic' />
        </div>
        <div className={styles.heading}>
          <h1>KNOW ABOUT US MORE</h1>
        </div>
      </div>

      <IndividualBrief />

      {/* <ResidenceBanner /> */}

      <Footer />
    </div>
  )
}
