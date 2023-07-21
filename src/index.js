import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import News from "./routes/News";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import {Provider} from "react-redux";
import store from './app/store'
import Main from "./routes/Main";
import RouteGuard from "./routes/RouteGuard";
import RestrictedGuard from "./routes/RestrictedGuard";

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
                element: (
                    <RouteGuard
                        redirectTo={'/login'}
                    >
                        <Profile/>
                    </RouteGuard>
                )
            },
            {
                path: "login",
                element: (
                    <RestrictedGuard
                        redirectTo={'/profile'}
                    >
                        <Login/>
                    </RestrictedGuard>
                ),
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