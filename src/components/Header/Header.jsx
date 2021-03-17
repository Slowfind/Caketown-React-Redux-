import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'
import { useSelector } from 'react-redux'

function Header() {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart)

    return (
        <header className="header">
            <div className="container">
                <div className="row no-gutters">
                    <Logo />
                    <div className="header__basket">
                        <Link to="/cart" className="btn btn--basket">
                            <div className="basket__price">{totalPrice} ₽</div>
                            <div className="basket__box">
                                <svg
                                    width="20"
                                    height="17"
                                    viewBox="0 0 20 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1.48577C1 1.48577 3.47059 0.392789 4.17647 1.48577M4.17647 1.48577C4.88235 2.57875 6.82353 6.60911 7.70588 8.48767C7.76471 8.65844 8.05882 9 8.76471 9C9.47059 9 13.7647 9 15.8235 9C16.0588 9 16.6 8.89753 16.8824 8.48767C17.1647 8.0778 18.4118 3.64896 19 1.48577H4.17647Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="16.5"
                                        cy="14.5"
                                        r="2.5"
                                        fill="white"
                                    />
                                    <circle
                                        cx="8.5"
                                        cy="14.5"
                                        r="2.5"
                                        fill="white"
                                    />
                                </svg>
                                <div className="basket__num">{totalCount}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
