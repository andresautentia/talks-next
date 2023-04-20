import classNames from 'classnames/bind'
import styles from './styles.module.scss'

let cx = classNames.bind(styles)
export const FeaturedImage: React.FC = () => {
    return (
        <section className={cx('featured-image')}>
            <div className={cx('featured-image-container')}>
                <h1>
                    <span>3 DE MARZO</span>
                    EVENTO <br />
                    <strong>TALKS</strong>
                </h1>
            </div>
        </section>
    )
}
