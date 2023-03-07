import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar } from "react-icons/ai";

import styles from './Product.module.scss'
import Face from '@/images/temp-face.png'

const Product = ({className}) => {
    return (
        <div className={[styles.product, className].join(' ')}>
            <Link href='/' className={styles.inner}>
                <div className={styles.img}>
                    <Image src={Face} alt='face'/>
                </div>
                <h3 className={styles.title}>Название циферблата</h3>
                <div className={styles.bottom}>
                    <div className={styles.rate}><AiFillStar/> 4.4</div>
                    <div className={styles.price}>399 <span>₽</span></div>
                </div>
            </Link>
        </div>
    )
}

export default Product