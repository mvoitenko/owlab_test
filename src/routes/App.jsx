import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import HeaderBar from "../components/HeaderBar";

function App() {
    const isAuthorized = useSelector((state) => state.auth.value);

    const pages = [
        {title: 'Главная', link: '/'},
        {title: 'Новости', link: '/news'},
        {title: 'Профиль', link: isAuthorized ? '/profile' : '/login'}
    ];

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify({login: 'Admin', password: '12345'})); //init mock user data
    }, []);

    return (
        <div>
            <HeaderBar menuItems={pages}/>
            <Outlet/>
        </div>
    );
}

export default App;
