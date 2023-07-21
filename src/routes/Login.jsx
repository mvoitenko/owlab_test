import {Alert, AlertTitle, Box, Button, Paper, TextField} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginAction} from "../features/auth/authSlice";
import {useDispatch} from "react-redux";

function Profile() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorInLogin, setErrorInLogin] = useState(false);


    const handleSubmit = (evt) => {
        evt.preventDefault();

        const userInput = {
            login: login,
            password: password
        };

        const usersData = localStorage.getItem('users');

        if (JSON.stringify(userInput) !== usersData) {
            setErrorInLogin(true)
        } else {
            dispatch(loginAction());
            navigate('/profile');
        }
    };

    const handleLoginChange = (evt) => {
        setLogin(evt.target.value);
    };

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value);
    };

    return (
        <Box sx={{
            pt: '25px',
            mx: '25px'
        }}>
            <Paper
                elevation={3}
                sx={{p: '20px', minWidth: '350px' , pt: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                   }}>

                {errorInLogin &&
                    <Alert severity="error" sx={{mb: '15px'}}>
                        <AlertTitle>Ошибка</AlertTitle>
                        Неправильно введен логин или пароль
                     </Alert>
                }
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            sx={{mb: '15px'}}
                            name="firstName"
                            type="text"
                            label="Логин"
                            onChange={handleLoginChange}
                            value={login}
                        />
                    </div>
                    <div>
                        <TextField
                            sx={{mb: '15px'}}
                            name="password"
                            type="password"
                            label="Пароль"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                    </div>

                    <div>
                        <Button sx={{width: '100%'}} type="submit" variant="contained">Войти</Button>
                    </div>
                </form>
            </Paper>
        </Box>
    );
}

export default Profile;