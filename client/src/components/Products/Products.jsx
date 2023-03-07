import styles from './Products.module.scss'
import Product from './Product/Product'

const Products = ({className, title}) => {
    return (
        <>
            {title &&
                <div className={[className, styles.head].join(' ')}>
                    <h2 className={styles.title}>{title}</h2>
                </div>
            }
            <div className={[className, styles.products].join(' ')}>
                <Product className={styles.product}></Product>
                <Product className={styles.product}></Product>
                <Product className={styles.product}></Product>
                <Product className={styles.product}></Product>
                <Product className={styles.product}></Product>
                <Product className={styles.product}></Product>
                <Product className={styles.product}></Product>
                <Product className={styles.product}></Product>
            </div>
        </>

    )
}

export default Products