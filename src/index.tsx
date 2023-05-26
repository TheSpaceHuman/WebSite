import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";


const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
