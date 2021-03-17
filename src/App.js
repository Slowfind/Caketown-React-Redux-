import React from 'react'
import { Route } from 'react-router-dom'
import './assets/scss/main.scss'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact />
            </main>
        </div>
    )
}

export default App
