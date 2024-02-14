import Image from 'next/image';
import styles from './page.module.css';
import ChevronRight from '../Icons/Chevronright';
import { details } from '@/data';

export default function IndividualBrief() {
    return (
        <div className={styles.container}>
            <div className={`${styles.column} ${styles.leftColumn}`}>
                {details.map(data =>
                    <>
                        <div key={data.id} className={styles.row1}>{data.name}</div>
                        <div key={data.id} className={styles.row2}>{data.description}</div>
                    </>

                )}
                <div className={styles.row3}>Know more <ChevronRight /></div>
            </div>
            <div className={styles.column}>
                <div className={styles.imageWrapper}>
                    <Image src='/suz.jpg' layout="fill" objectFit="cover" />
                </div>
            </div>
        </div>
    );
}
