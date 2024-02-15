import Image from 'next/image';
import styles from './page.module.css';
import ChevronRight from '../../Icons/Chevronright';
import { details } from '@/data';
import React from 'react'
import Button from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function IndividualBrief() {
    return (

        details.map(data =>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1 }}
                className={styles.container} key={data.id}>
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

            </motion.div>
        )

    );
}
