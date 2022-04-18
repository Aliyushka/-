import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import MenuNewProducts from './components/MenuNewProducts/MenuNewProducts';
import Pizzas from './components/Pizzas/Pizzas';
import Footer from './components/Footer/Footer';
import AboutUs from "./components/AboutUs/AboutUs";
import'./App.css'


const App = () => {
    return (
        <>
            <div className="container">
                <Header/>
                <Content/>
                <MenuNewProducts/>
                {/*<MenuBlockPizza/>*/}
                {/*<Pizzas/>*/}
                <AboutUs/>
            </div>
            <Footer/>
        </>
    );
};


export default App;