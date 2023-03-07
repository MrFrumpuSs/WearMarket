import Link from 'next/link'

import styles from './Footer.module.scss'

const Footer = ({className}) => {
    return (
        <footer className={className}>
            <div className={[styles.inner, 'container'].join(' ')}>
                <ul className={styles.ul}>
                    <li><Link href='/'>Политика конфиденциальности</Link></li>
                    <li><Link href='/'>Условия использования</Link></li>
                    <li><Link href='/'>Публичная оферта</Link></li>
                    <li><Link href='/'>Для разработчиков</Link></li>
                </ul>
                <p className={styles.copyright}>© 2023, Wear Market</p>
            </div>
        </footer>
    )
}

export default Footer