import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import cartEmptyImage from '../assets/img/cart-empty.svg'
import Button from '../components/Button/Button'
import CartItem from '../components/CartIrem/CartItem'
import {
    ClearCart,
    removeCartItem,
    plusCartItem,
    minusCartItem,
} from '../redux/actions/cart'

function Cart() {
    const dispatch = useDispatch()
    const {
        totalPrice,
        totalCount,
        items,
        totalIdCount,
        totalIdPrice,
    } = useSelector(({ cart }) => cart)

    const allArrCakes = Object.keys(items).map((i, _) => items[i])

    const addCakes = [].concat.apply([], allArrCakes)

    const arrItemsIndex = Object.keys(addCakes).map((i, _) => i)

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину')) {
            dispatch(ClearCart())
        }
    }

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить торт')) {
            dispatch(removeCartItem(id))
        }
    }

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id))
    }

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id))
    }

    const onOrder = () => {
        console.log('ВАШ ЗАКАЗ', items)
    }

    return (
        <>
            {totalCount ? (
                <section className="section section--cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="section__header">
                                    <h1 className="--icon-cart">Корзина</h1>
                                    <Button
                                        onClick={onClearCart}
                                        type="button"
                                        icon
                                        trash
                                    >
                                        Очистить корзину
                                    </Button>
                                </div>
                                <div className="cart">
                                    <div className="cart__grid">
                                        {addCakes.map((obj, index) => (
                                            <CartItem
                                                id={obj.uniqId}
                                                key={arrItemsIndex[index]}
                                                name={obj.name}
                                                type={obj.type}
                                                size={obj.size}
                                                image={obj.image}
                                                totalPrice={
                                                    totalIdPrice[obj.uniqId]
                                                }
                                                totalCount={
                                                    totalIdCount[obj.uniqId]
                                                }
                                                onRemove={onRemoveItem}
                                                onPlus={onPlusItem}
                                                onMinus={onMinusItem}
                                            />
                                        ))}
                                    </div>
                                    <div className="cart__cost cost">
                                        <div className="cost__total">
                                            Всего тортов:{' '}
                                            <b>{totalCount} шт.</b>
                                        </div>
                                        <div className="cost__sum">
                                            Сумма заказа:{' '}
                                            <span className="cost-sum">
                                                {totalPrice} ₽
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cart__order">
                                        <Link
                                            to="/"
                                            className="btn btn--outline btn--icon btn--back"
                                        >
                                            Вернуться назад
                                        </Link>
                                        <Button onClick={onOrder} order>
                                            оплатить сейчас
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="section--cart">
                    <div className="container">
                        <div className="cart cart--empty">
                            <h2>Корзина пустая</h2>
                            <p className="cart__subtitle">
                                В этой корзине пока нет сладких вкусняшек :(
                            </p>
                            <div className="cart__sketch">
                                <img
                                    src={cartEmptyImage}
                                    alt="Корзина пустая"
                                />
                            </div>
                            <div className="cart__back">
                                <Link to="/" className="btn btn--empty">
                                    Вернуться назад
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Cart
