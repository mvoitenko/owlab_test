import {Paper, Typography} from "@mui/material";

function Main() {
    return (
        <Paper elevation={3} sx={{m: '25px', p: '15px'}}>
            <Typography variant="h5" component="div">
                Тестовое задание для OWLAB
            </Typography>
            <hr/>
            <Typography variant="h6" component="div">
                Стэк:
            </Typography>
            <ul>
                <li>
                    Javascript
                </li>
                <li>
                    React.js
                </li>
                <li>
                    react-router-dom
                </li>
                <li>
                    react-redux
                </li>
            </ul>
        </Paper>
    );
}

export default Main;