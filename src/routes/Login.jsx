import {Alert, AlertTitle, Box, Button, Paper, TextField} from "@mui/material";
import {useRef, useState} from "react";
import {loginAction} from "../features/auth/authSlice";
import {useDispatch} from "react-redux";

function Profile() {

    const dispatch = useDispatch()

    const loginRef = useRef(null);   //useRef instead of useState in order to avoid unnecessary renders
    const passwordRef = useRef(null);
    const [errorInLogin, setErrorInLogin] = useState(false);


    const handleSubmit = (evt) => {
        evt.preventDefault();

        const userInput = {
            login: loginRef.current.value,
            password: passwordRef.current.value
        };

        const usersData = localStorage.getItem('users');

        if (JSON.stringify(userInput) !== usersData) {
            setErrorInLogin(true)
        } else {
            dispatch(loginAction());
        }
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
                            inputRef={loginRef}
                        />
                    </div>
                    <div>
                        <TextField
                            sx={{mb: '15px'}}
                            name="password"
                            type="password"
                            label="Пароль"
                            inputRef={passwordRef}
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