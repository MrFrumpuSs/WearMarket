import Link from 'next/link'

import styles from './Banner.module.scss'


const Banner = ({className}) => {
    return (
        <Link href='/' className={[styles.banner, className].join(' ')}>
            <div className={styles.inner}>
                <h2 className={styles.title}>Топ 20 циферблатов</h2>
                <h3 className={styles.subtitle}>Рекомендуемые</h3>
            </div>
        </Link>
    )
}

export default Banner