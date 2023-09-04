import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@Right 2023 Lamania. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/twitter.png" className={styles.icon} width={15} height={15} alt='Lama Dev'/>
        <Image src="/twitter.png" className={styles.icon} width={15} height={15} alt='Lama Dev'/>
        <Image src="/twitter.png" className={styles.icon} width={15} height={15} alt='Lama Dev'/>
        <Image src="/twitter.png" className={styles.icon} width={15} height={15} alt='Lama Dev'/>

      </div>
    </div>
  )
}

export default Footer