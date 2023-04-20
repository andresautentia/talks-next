import { useState } from 'react'
import logo from './assets/logo-talks.png'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import Link from 'next/link'
import Image from 'next/image'

let cx = classNames.bind(styles)
export const Header: React.FC = () => {
    const [showNav, setShowNav] = useState<boolean>(false)

    return (
        <header className={cx('header')}>
            <div className={cx('header-container')}>
                <Link href="/" className={cx('logo')}>
                    <Image src={logo} alt={'Logo de talks'} />
                </Link>
                <nav className={showNav ? 'show' : ''}>
                    <ul>
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/">Nosotros</Link>
                        </li>
                        <li>
                            <Link href="/">Blog</Link>
                        </li>
                        <li>
                            <Link href="/">Contacto</Link>
                        </li>
                        <li>
                            <Link className={cx('buy-ticket')} href="/">
                                Comprar entradas
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button type="button" onClick={() => setShowNav(!showNav)} className={showNav ? 'close' : ''}>
                    <span className={cx('top')}></span>
                    <span className={cx('mid')}></span>
                    <span className={cx('bottom')}></span>
                </button>
            </div>
        </header>
    )
}
