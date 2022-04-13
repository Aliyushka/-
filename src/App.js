import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/';
import MenuNewProductItem from './components/MenuNewProductItem/';
import MenuNewProducts from './components/MenuNewProducts/';
import MenuBlockPizza from './components/MenuBlockPizza/';
import Pizzas from './components/Pizzas/';
import Footer from './components/Footer/';




const App = () => {
    return (
        <>
        <div className="container">
            <Header/>
            <Content/>
            <MenuNewProductItem/>
            <MenuNewProducts/>
            <MenuBlockPizza/>
            <Pizzas/>
        </div>
        <Footer/>
        </>
    );
};

export default App;