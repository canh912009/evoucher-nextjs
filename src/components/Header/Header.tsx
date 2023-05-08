import React from 'react'
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useGlobalState } from '@/state'
import { useRouter } from 'next/router'
import HeaderSearch from './HeaderSearch'

const Header = () => {
    const [, setToken] = useGlobalState("token")
    const [userInfo, setUserInfo] = useGlobalState("currentUser")
    const router = useRouter()

    function handleLogout(event: any): void {
        if (window.confirm('Confirm logout ? ')) {
            Cookies.remove("token");
            setToken('')
            setUserInfo(null)
            router.push('/login')
        }
    }

    return (
        <header>
            <div className="ass1-header">
                <div className="container">
                    <Link href="/" className="ass1-logo"> Canh Meme </Link>
                    <nav>
                        <ul className="ass1-header__menu">
                            <li>
                                <a href="#">Danh mục</a>
                                <div className="ass1-header__nav" style={{ display: 'none' }}>
                                    <div className="container">
                                        <ul>
                                            <li><a href="index.html">Funny</a></li>
                                            <li><a href="index.html">Animals</a></li>
                                            <li><a href="index.html">Anime &amp; Mâng</a></li>
                                            <li><a href="index.html">Awesome</a></li>
                                            <li><a href="index.html">Basketball</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="index.html">Car</a></li>
                                            <li><a href="index.html">Comic</a></li>
                                            <li><a href="index.html">Cosplay</a></li>
                                            <li><a href="index.html">Countryballs</a></li>
                                            <li><a href="index.html">Classical Art Memes</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="index.html">Girl</a></li>
                                            <li><a href="index.html">History</a></li>
                                            <li><a href="index.html">K-POP</a></li>
                                            <li><a href="index.html">V-POP</a></li>
                                            <li><a href="index.html">Pokémon</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="index.html">School</a></li>
                                            <li><a href="index.html">Star war</a></li>
                                            <li><a href="index.html">Coder</a></li>
                                            <li><a href="index.html">Travel</a></li>
                                            <li><a href="index.html">Sport</a></li>
                                        </ul>
                                    </div>
                                    <div className="ass1-header__menu-transition" />
                                </div>
                            </li>
                            <li className="active">
                                <a href="index.html">Hot</a>
                                <div className="ass1-header__nav" style={{ display: 'none' }}>
                                    <div className="container">
                                        <ul>
                                            <li><a href="index.html">Funny</a></li>
                                            <li><a href="index.html">Animals</a></li>
                                            <li><a href="index.html">Anime &amp; Mâng</a></li>
                                            <li><a href="index.html">Awesome</a></li>
                                            <li><a href="index.html">Basketball</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="index.html">Car</a></li>
                                            <li><a href="index.html">Comic</a></li>
                                            <li><a href="index.html">Cosplay</a></li>
                                            <li><a href="index.html">Countryballs</a></li>
                                            <li><a href="index.html">Classical Art Memes</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="index.html">Girl</a></li>
                                            <li><a href="index.html">History</a></li>
                                            <li><a href="index.html">K-POP</a></li>
                                            <li><a href="index.html">V-POP</a></li>
                                            <li><a href="index.html">Pokémon</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="index.html">School</a></li>
                                            <li><a href="index.html">Star war</a></li>
                                            <li><a href="index.html">Coder</a></li>
                                            <li><a href="index.html">Travel</a></li>
                                            <li><a href="index.html">Sport</a></li>
                                        </ul>
                                    </div>
                                    <div className="ass1-header__menu-transition" />
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <HeaderSearch />
                    <Link href="/posts/create" className="ass1-header__btn-upload ass1-btn">
                        <i className="icon-Upvote" /> Upload
                    </Link>
                    {
                        userInfo
                            ? <div className={styles.wrapper_user}>
                                <a className={styles.user_header}>
                                    <span className={styles.avatar}>
                                        <img src={userInfo.profilepicture || "/images/avatar-02.png"} alt="avatar" />
                                    </span>
                                    <span className="email">{userInfo.email}</span>
                                </a>
                                <div onClick={handleLogout} className={styles.logout}>Logout</div>
                            </div>
                            : <Link href="/login" className="ass1-header__btn-upload ass1-btn">
                                Login
                            </Link>
                    }
                </div>
            </div>
        </header>

    )
}

export default Header