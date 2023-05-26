import React, {Suspense} from 'react';
import './styles/main.scss';
import {Link, Route, Routes} from "react-router-dom";
import {HomePageLazy} from "./pages/HomePage/HomePage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path={'/'} element={<HomePageLazy/>}></Route>
                    <Route path={'/about'} element={<AboutPageLazy/>}></Route>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
