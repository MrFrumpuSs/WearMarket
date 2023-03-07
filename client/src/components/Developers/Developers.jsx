import styles from './Developers.module.scss'
import Developer from './Developer/Developer'

const Developers = ({className}) => {
    return (
        <>
            <div className={className}>
                <h2 className={styles.title}>Разработчики</h2>
            </div>
            <div className={[className, styles.developers].join(' ')}>
                <Developer className={styles.developer}></Developer>
                <Developer className={styles.developer}></Developer>
                <Developer className={styles.developer}></Developer>
                <Developer className={styles.developer}></Developer>
                <Developer className={styles.developer}></Developer>
                <Developer className={styles.developer}></Developer>
                <Developer className={styles.developer}></Developer>
                <Developer className={styles.developer}></Developer>
            </div>
        </>

    )
}

export default Developers