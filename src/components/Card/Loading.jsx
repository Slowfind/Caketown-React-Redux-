import React from 'react'

function Loading() {
    return (
        <div className="col-lg-3">
            <div className="skeleton">
                <div className="skeleton__circle"></div>
                <div className="skeleton__title"></div>
                <div className="skeleton__body"></div>
                <div className="skeleton__price"></div>
                <div className="skeleton__button"></div>
            </div>
        </div>
    )
}

export default Loading
