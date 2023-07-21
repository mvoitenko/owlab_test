import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import News from "./routes/News";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import {Provider} from "react-redux";
import store from './app/store'
import Main from "./routes/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "news",
                element: <News/>,
            },
            {
                path: "profile",
                element: <Profile/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);