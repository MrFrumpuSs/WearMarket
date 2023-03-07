import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar } from "react-icons/ai";

import styles from './Developer.module.scss'
import DeveloperImg from '@/images/temp-developer.png'

const Developer = ({className}) => {
    return (
        <div className={[styles.developer, className].join(' ')}>
            <Link href='/' className={styles.inner}>
                <div className={styles.img}>
                    <Image src={DeveloperImg} alt='face'/>
                </div>
                <h3 className={styles.title}>Ник разработчика</h3>
                <div className={styles.bottom}>
                    <div className={styles.rate}><AiFillStar/> 4.4</div>
                    <div className={styles.works}>1 <span>работа</span></div>
                </div>
            </Link>
        </div>
    )
}

export default Developer