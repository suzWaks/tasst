import Image from 'next/image';
import styles from './page.module.css';
import ChevronRight from '../../Icons/Chevronright';
import { details } from '@/data';
import React from 'react'
import Button from '@/components/ui/button';

export default function IndividualBrief() {
    return (

        details.map(data =>
            <div className={styles.container} key={data.id}>
                {data.id % 2 === 0 ? (
                    <>
                        <div className={`${styles.column} ${styles.leftColumn}`}>

                            <>
                                <div key={data.id} className={styles.row1}>{data.name}</div>
                                <div key={data.id} className={styles.row2}>{data.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}</div>
                            </>


                            <Button text='Know More' />
                        </div>
                        <div className={styles.column}>
                            <div className={styles.imageWrapper}>
                                <Image src={data.image} layout='fill' alt={data.name} />
                            </div>
                        </div>
                    </>

                ) : (
                    <>
                        <div className={styles.column}>
                            <div className={styles.imageWrapper}>
                                <Image src={data.image} layout="fill" alt={data.name} />
                            </div>
                        </div>
                        <div className={`${styles.column} ${styles.leftColumn}`}>

                            <>
                                <div key={data.id} className={styles.row1}>{data.name}</div>
                                <div key={data.id} className={styles.row2}>{data.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}</div>
                            </>


                            <Button text='Know More' />
                        </div>

                    </>
                )}

            </div>
        )

    );
}
