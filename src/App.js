import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import MenuNewProductItem from './components/MenuNewProductItem/MenuNewProductItem';
import MenuNewProducts from './components/MenuNewProducts/MenuNewProducts';
import MenuBlockPizza from './components/MenuBlockPizza/MenuBlockPizza';
import Pizzas from './components/Pizzas/Pizzas';
import Footer from './components/Footer/Footer';




const App = () => {
    return (
        <>
        <div className="container">
            <Header/>
            {/*<Content/>
            <MenuNewProductItem/>
            <MenuNewProducts/>
            <MenuBlockPizza/>*/}
            {/*<Pizzas/>*/}
        </div>
        <Footer/>
        </>
    );
};



export default App;