import { useGlobalState } from '@/state'
import Link from 'next/link'
import React from 'react'

const HeaderMenu = () => {
    const [categories] = useGlobalState("categories")

    return (
        <nav>
            <ul className="ass1-header__menu">
                <li>
                    <a href="#">Danh mục</a>
                    <div className="ass1-header__nav" style={{}}>
                        <div className="container">
                            <ul>
                                {
                                    categories.map((cate) => {
                                        return (
                                            <li key={cate.id}>
                                                <Link href={`/categories/${cate.id}`}>{cate.text}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="ass1-header__menu-transition" />
                    </div>
                </li>
                <li className="active" style={{ display: 'none' }}>
                    <a href="index.html">Hot</a>
                    <div className="ass1-header__nav" >
                        <div className="container" >
                            <ul>
                                <li><a href="index.html">Funny</a></li>
                                <li><a href="index.html">Animals</a></li>
                                <li><a href="index.html">Anime &amp; Mâng</a></li>
                                <li><a href="index.html">Awesome</a></li>
                                <li><a href="index.html">Basketball</a></li>
                                <li><a href="index.html">Car</a></li>
                                <li><a href="index.html">Comic</a></li>
                                <li><a href="index.html">Cosplay</a></li>
                                <li><a href="index.html">Countryballs</a></li>
                                <li><a href="index.html">Classical Art Memes</a></li>
                                <li><a href="index.html">Girl</a></li>
                                <li><a href="index.html">History</a></li>
                                <li><a href="index.html">K-POP</a></li>
                                <li><a href="index.html">V-POP</a></li>
                                <li><a href="index.html">Pokémon</a></li>
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
    )
}

export default HeaderMenu