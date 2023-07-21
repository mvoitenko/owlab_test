import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import Logo from "./Logo";
import {Link} from "react-router-dom";

function HeaderBar({menuItems}) {
    return (
        <AppBar position="static" sx={{
            backgroundColor: '#2c2d2f',
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo/>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex', marginLeft: '25px'}}}>
                        {menuItems.map((menuItem) => (
                            <Link style={{textDecoration: 'none'}} key={menuItem.link} to={menuItem.link}>
                                <Button sx={{marginTop: '7px', color: 'white', display: 'block'}}>
                                    {menuItem.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default HeaderBar;