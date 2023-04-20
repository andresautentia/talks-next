import picture1 from './assets/picture1.jpg'
import picture2 from './assets/picture2.jpg'
import picture3 from './assets/picture3.jpg'
import picture4 from './assets/picture4.jpg'
import picture5 from './assets/picture5.jpg'
import picture6 from './assets/picture6.jpg'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Image from 'next/image'

let cx = classNames.bind(styles)
export const Speakers: React.FC = () => {
    return (
        <section className={cx('speakers')}>
            <div className={cx('speakers-container')}>
                <h2>Nuestros ponentes</h2>
                <hr />
                <h3>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, laboriosam ipsum a ipsam culpa ut
                    ducimus.
                </h3>
                <div className={cx('people')}>
                    <div className={cx('person')}>
                        <Image src={picture1} alt="David Fernández" />
                        <h4>David Fernández</h4>
                        <p>FullStack</p>
                    </div>
                    <div className={cx('person')}>
                        <Image src={picture6} alt="Lucía Castro" />
                        <h4>Lucía Castro</h4>
                        <p>DevOps</p>
                    </div>
                    <div className={cx('person')}>
                        <Image src={picture2} alt="Miguel Ángel" />
                        <h4>Miguel Ángel Pérez</h4>
                        <p>Backend</p>
                    </div>
                    <div className={cx('person')}>
                        <Image src={picture3} alt="Lucas Élices" />
                        <h4>Lucas Élices</h4>
                        <p>DevOps</p>
                    </div>
                    <div className={cx('person')}>
                        <Image src={picture4} alt="Iñaki Heras" />
                        <h4>Iñaki Heras</h4>
                        <p>Frontend</p>
                    </div>
                    <div className={cx('person')}>
                        <Image src={picture5} alt="Mario Fernández" />
                        <h4>Mario Fernández</h4>
                        <p>Frontend</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
