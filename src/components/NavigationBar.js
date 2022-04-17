//React, ReactDOM
import * as React from 'react';
import { Link } from "react-router-dom";

//Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//Constants
import * as navigationBarConst from '../constants/navigationBarConst';

export default function NavigationBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={4} align="left">
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                                style={{ fontWeight: "bold" }}
                            >
                                JPROMSO
                            </Typography>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Stack
                                spacing={2}
                                justifyContent="center"
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem style={{ backgroundColor: "white" }} />}
                            >
                                {navigationBarConst.BAR_MENUS.map((menu) =>
                                    <Link disabled={menu.name !== "Products"} key={menu.name} to={menu.url} style={{ textDecoration: 'none', color: '#0f0f0f' }}>
                                        <Button variant="text" style={{ color: "white" }}>{menu.name}</Button>
                                    </Link>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}