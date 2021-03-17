import React, { useState, useEffect, useRef } from 'react'

const SortPopup = function SortPopup({
    items,
    activeSortType,
    onClickSortType,
}) {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const sortRef = useRef(null)

    const activeLabel = items.find((obj) => obj.type === activeSortType).name

    const onSelectItem = (index) => {
        onClickSortType(index)
        setVisiblePopup(false)
    }

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const handleClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath())
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleClick)
    }, [])

    return (
        <div
            ref={sortRef}
            className={`sort ${visiblePopup ? 'is-active' : ''}`}
        >
            <div className="sort__header">
                <span className="sort__text">Сортировать по:</span>{' '}
                <span onClick={toggleVisiblePopup} className="sort__select">
                    {activeLabel}
                </span>
            </div>
            <div className="sort__content">
                {items &&
                    items.map((obj, index) => (
                        <span
                            onClick={() => onSelectItem(obj)}
                            className={
                                activeSortType === obj.type ? 'is-active' : ''
                            }
                            key={`${obj.type}_${index}`}
                        >
                            {obj.name}
                        </span>
                    ))}
            </div>
        </div>
    )
}

export default React.memo(SortPopup)
