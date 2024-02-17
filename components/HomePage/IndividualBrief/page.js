import styles from './page.module.css'
import Image from 'next/image';
import { details } from '@/data';
import Button from '@/components/ui/button';
import * as motion from '@/components/HomePage/IndividualBrief/motion'

import React from 'react';

export default function IndividualBrief() {
    return (
        details.map(data =>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1 }} className={styles.container} key={data.id}>

                {data.id % 2 === 0 ? (
                    <>
                        <div className={styles.column}>
                            <Image src={data.image} width={400} height={400} alt={data.name} />
                        </div>
                        <div className={styles.column} >
                            <h2>{data.name}</h2>
                            <p>{data.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                            </p>
                            <Button text='Know More' />

                        </div>
                    </>

                ) : (
                    <>
                        <div className={`${styles.column} ${styles.colImg}`}>
                            <Image src={data.image} width={400} height={400} alt={data.name} />
                        </div>
                        <div className={`${styles.column} ${styles.coltext}`}>
                            <h2>{data.name}</h2>
                            <p>{data.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                            </p>
                            <Button text='Know More' />
                        </div>

                    </>
                )}
            </motion.div>

        )

    )
}
