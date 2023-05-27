import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {HomePageLazy} from "./pages/HomePage/HomePage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import cn from 'classnames';
import Header from "./components/Header/Header";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={cn('app', `theme--${theme}`)}>
            <Header/>
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
