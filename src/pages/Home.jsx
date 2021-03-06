import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Category from '../components/Category/Category'
import SortPopup from '../components/Sort/SortPopup'
import Card from '../components/Card/Card'
import Loading from '../components/Card/Loading'

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchCakes } from '../redux/actions/cakes'

const categoryNames = [
    'День рождения',
    'Новый год',
    'День Св. Валентина',
    '8 марта',
]
const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
]

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({ cakes }) => cakes.items)
    const cartItems = useSelector(({ cart }) => cart.items)
    const isLoaded = useSelector(({ cakes }) => cakes.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    React.useEffect(() => {
        dispatch(fetchCakes(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddCakesToCart = (obj) => {
        dispatch({
            type: 'ADD_CAKES_CART',
            payload: obj,
        })
    }
    return (
        <>
            <section className="section section--category">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Category
                                activeCategory={category}
                                onClickCategory={onSelectCategory}
                                items={categoryNames}
                            />
                        </div>
                        <div className="col-lg-3">
                            <SortPopup
                                activeSortType={sortBy.type}
                                onClickSortType={onSelectSortType}
                                items={sortItems}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--catalog">
                <div className="container">
                    <h1 className="section__header">Все торты</h1>
                    <div className="row">
                        {isLoaded
                            ? items.map((obj) => (
                                  <Card
                                      onClickAddCakes={handleAddCakesToCart}
                                      {...obj}
                                      key={obj.id}
                                      addedCount={
                                          cartItems[obj.id] &&
                                          cartItems[obj.id].items.length
                                      }
                                  />
                              ))
                            : Array(items.length)
                                  .fill(0)
                                  .map((_, index) => <Loading key={index} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
