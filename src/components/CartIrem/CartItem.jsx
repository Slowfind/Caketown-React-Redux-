import React from 'react'

import Button from '../../components/Button/Button'

function CartItem(props) {
    const {
        id,
        name,
        type,
        size,
        image,
        totalPrice,
        totalCount,
        onRemove,
        onPlus,
        onMinus,
    } = props
    const handleRemoveClick = () => {
        onRemove(id)
    }

    const handlePlusItem = () => {
        onPlus(id)
    }

    const handleMinusItem = () => {
        onMinus(id)
    }
    return (
        <div className="cart__item">
            <div className="cart__info">
                <div className="cart__image">
                    <img src={image} alt={name} />
                </div>
                <div className="cart__box">
                    <div className="cart__title">{name}</div>
                    <div className="cart__desc">
                        {type}, {size} см.
                    </div>
                </div>
            </div>
            <div className="cart__counter counter">
                <Button onClick={handleMinusItem} type="button" circle counter>
                    <svg
                        width="9"
                        height="2"
                        viewBox="0 0 9 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.162109 0.207031H8.79297V1.64844H0.162109V0.207031Z"
                            fill="#96666C"
                        />
                    </svg>
                </Button>
                <div className="counter__num">{totalCount}</div>
                <Button onClick={handlePlusItem} type="button" circle counter>
                    <svg
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.10352 0.707031V5.20703H10.4277V6.64844H6.10352V11.3242H4.48633V6.64844H0.162109V5.20703H4.48633V0.707031H6.10352Z"
                            fill="#96666C"
                        />
                    </svg>
                </Button>
            </div>
            <div className="cart__price">{totalPrice} ₽</div>
            <div className="card__del">
                <Button onClick={handleRemoveClick} type="button" del circle>
                    <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.01247 0.658963L5.19445 3.84094L8.25213 0.78326L9.27136 1.80249L6.21368 4.86017L9.51995 8.16645L8.37643 9.30997L5.07015 6.0037L2.01247 9.06138L0.993239 8.04215L4.05092 4.98447L0.868943 1.80249L2.01247 0.658963Z"
                            fill="#C4C4C4"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export default React.memo(CartItem)
