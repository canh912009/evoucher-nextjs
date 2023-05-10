import React from 'react'
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useGlobalState } from '@/state'
import { useRouter } from 'next/router'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'

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
                    <HeaderMenu />
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