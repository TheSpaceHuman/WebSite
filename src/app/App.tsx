import React, {Suspense} from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router-dom";
import cn from 'classnames';
import {useTheme} from "app/providers/ThemeProvider";
import {HomePage} from "pages/HomePage";
import {AboutPage} from "pages/AboutPage";
import {Header} from "shared/ui";

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={cn('app', `theme--${theme}`)}>
            <Header/>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}></Route>
                    <Route path={'/about'} element={<AboutPage/>}></Route>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
