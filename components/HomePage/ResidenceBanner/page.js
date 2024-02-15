import Button from '@/components/ui/button'
import styles from './page.module.css'
import Image from 'next/image'

export default function ResidenceBanner() {
    return (
        <div className={styles.Rbanner}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div>
                        <h1>TASST Residency</h1>
                        <p>Duplex home</p>
                        <p>Dzomlingthang, Gelephu</p>
                    </div>
                </div >
                <div className={styles.column}>
                    <Button text='Details' />
                </div>
            </div>
            {/* <div className={styles.imageContainer}>
                <Image src='/images/Home.jpg' alt="Residence Banner" fill />
            </div> */}
        </div>

    )
}
