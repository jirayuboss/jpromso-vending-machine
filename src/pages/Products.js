//React
import React, { useState, useEffect } from 'react'

//Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

//Functions
import { GetProducts } from '../functions/products';

//Components
import ProductDialog from '../components/ProductPage/ProductDialog';
import ProductList from '../components/ProductPage/ProductList';

export default function Products() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resProducts = await GetProducts();
            setProduct(resProducts);
        }

        fetchData();
    }, [])

    return (
        <Container maxWidth="lg">
            <Paper style={{ marginTop: "50px" }}>
                <Grid container spacing={2} style={{ padding: "50px" }}>
                    <Grid item align="center" xs={12}>
                        <Typography
                            variant="h3"
                            style={{ fontWeight: "bold" }}>
                            Products
                        </Typography>
                    </Grid>
                    <Grid item align="center" xs={12}>
                        <ProductList />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}