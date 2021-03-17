import React from 'react'
import Button from '../Button/Button'
function Category({ activeCategory, items, onClickCategory }) {
    return (
        <div className="category">
            <Button
                category
                className={activeCategory === null ? 'is-active' : ''}
                onClick={() => onClickCategory(null)}
            >
                Все
            </Button>
            {items &&
                items.map((item, index) => (
                    <Button
                        category
                        className={activeCategory === index ? 'is-active' : ''}
                        onClick={() => onClickCategory(index)}
                        key={`${item}_${index}`}
                    >
                        {item}
                    </Button>
                ))}
        </div>
    )
}

export default React.memo(Category)
