import React from 'react'
import classNames from 'classnames'

const Button = (props) => {
    const {
        onClick,
        children,
        className,
        outline,
        card,
        category,
        circle,
        order,
        empty,
        back,
        trash,
        counter,
        icon,
        del,
    } = props
    return (
        <button
            onClick={onClick}
            className={classNames('btn', className, {
                'btn--outline': outline,
                'btn--card': card,
                'btn--category': category,
                'btn--circle': circle,
                'btn--order': order,
                'btn--empty': empty,
                'btn---back': back,
                'btn--trash': trash,
                'btn--icon': icon,
                'btn--counter': counter,
                'btn--del': del,
            })}
        >
            {children}
        </button>
    )
}

export default React.memo(Button)
