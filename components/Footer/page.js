import styles from './page.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div>
                    <h2>Contact Us</h2>
                </div>
            </div >
            <div className={`${styles.column} ${styles.corner}`}>
                <p>All rights reserved ©</p>
            </div>
        </div>
    )
}
