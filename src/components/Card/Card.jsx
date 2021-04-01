import React, { useState } from 'react'
import classNames from 'classnames'
import Button from '../Button/Button'

function Card(props) {
    const {
        id,
        name,
        image,
        price,
        types,
        sizes,
        onClickAddCakes,
        addedCount,
    } = props
    const typeNames = ['1 ярус', '2 ярус']
    const sizeNames = [26, 30, 40]

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])

    let [itemPrice, setItemPrice] = useState(price[activeSize])

    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onSelectSize = (index) => {
        setActiveSize(index)
        setItemPrice(price[index])
    }

    const onAddCakes = () => {
        const obj = {
            id,
            name,
            image,
            price: itemPrice,
            size: sizeNames[activeSize],
            type: typeNames[activeType],
        }
        onClickAddCakes(obj)
    }

    return (
        <div className="col-lg-3">
            <div className="card">
                <div className="card__header">
                    <img src={image} alt={name} className="card__image" />
                    <div className="card__title">{name}</div>
                </div>
                <div className="card__body">
                    <ul className="card__options card__options--tier">
                        {typeNames.map((type, index) => (
                            <li
                                onClick={() => onSelectType(index)}
                                key={type}
                                className={`card__option ${classNames({
                                    'is-active': activeType === index,
                                    'is-disabled': !types.includes(index),
                                })}`}
                            >
                                <span>{type}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="card__options card__options--width">
                        {sizeNames.map((size, index) => (
                            <li
                                onClick={() => onSelectSize(index)}
                                key={size}
                                className={`card__option ${classNames({
                                    'is-active': activeSize === index,
                                    'is-disabled': !sizes.includes(index),
                                })}`}
                            >
                                <span>{size} см.</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card__footer">
                    <div className="card__price">
                        {activeType === 1
                            ? (itemPrice = itemPrice + 200)
                            : itemPrice}
                        &nbsp;₽
                    </div>
                    <Button onClick={onAddCakes} outline card>
                        Добавить {addedCount && <span>{addedCount}</span>}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Card)
