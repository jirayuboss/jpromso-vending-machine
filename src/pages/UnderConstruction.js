//React
import * as React from 'react';

//Material UI
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

export default function UnderConstruction() {
    return (
        <Container maxWidth="lg">
            <Grid container style={{ marginTop: "50px" }}>
                <Grid item align="center" xs={12}>
                    <Card elevation={0} sx={{ maxWidth: 1000 }}>
                        <CardMedia
                            component="img"
                            height="500"
                            image="/Theo & Kate.jpg"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}