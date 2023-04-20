import logo from './assets/logo-footer.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'
import instagram from './assets/instagram.png'
import './styles.module.scss'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

let cx = classNames.bind(styles)
export const Footer: React.FC = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-container')}>
                <Image src={logo} alt="Talks logo" />
                <div className={cx('social')}>
                    <ul>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <Image src={facebook} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <Image src={twitter} alt="Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <Image src={linkedin} alt="Linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <Image src={instagram} alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer-links')}>
                    <ul>
                        <li>
                            <Link href="/">Aviso legal</Link>
                        </li>
                        <li>
                            <Link href="/">Política de privacidad</Link>
                        </li>
                        <li>
                            <Link href="/">Política de cookies</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('copyright')}>
                    <p>© 2023 Talks</p>
                </div>
            </div>
        </footer>
    )
}
