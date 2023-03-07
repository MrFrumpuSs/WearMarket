import { Popover } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './UserProfile.module.scss'
import Avatar from '@/images/temp-avatar.png'

const UserProfile = () => {
    return (
        <Popover className="relative">
            <Popover.Button className={styles.profile}>
                <p className={styles.login}>Alexandr</p>
                <Image className={styles.avatar} src={Avatar} alt='avatar' />
            </Popover.Button>
            <Popover.Panel className="absolute z-10">
                <ul>
                    <li><Link href='/'>Настройки</Link></li>
                    <li><Link href='/'>Выйти</Link></li>
                </ul>
                <ul>
                    <li><Link href='/'>Политика конфиденциальности</Link></li>
                    <li><Link href='/'>Условия использования</Link></li>
                </ul>
            </Popover.Panel>
        </Popover>
    )
}

export default UserProfile


