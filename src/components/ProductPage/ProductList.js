//React
import React, { useState, useEffect } from 'react'

//Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//Functions
import { GetProducts } from '../../functions/products';

//Components
import ProductDialog from './ProductDialog';
import PaymentDialog from './PaymentDialog';

export default function ProductList() {
    const [products, setProduct] = useState([]);
    const [isOpenDialog, setDialog] = useState(false);
    const [isOpenPaymentDialog, setPaymentDialog] = useState(false);
    const [productObj, setProductObj] = useState({});

    useEffect(() => {
        async function fetchData() {
            const resProducts = await GetProducts();
            setProduct(resProducts);
        }

        fetchData();
    }, [])

    const onClickProduct = (product) => {
        setDialog(true);
        setProductObj(product);
    }

    const handleCloseDialog = () => {
        console.log("IN")
        setDialog(false);
    }

    const handleSetPaymentDialog = (status) => {
        handleCloseDialog();
        setPaymentDialog(status);
    }

    return (
        <Grid container spacing={2}>
            {products.length === 0 &&
                <Grid item xs={12} style={{ marginTop: "20%", marginBottom: "20%" }}>
                    <CircularProgress size={200}  />
                </Grid>
            }

            {products.map((product) =>
                <Grid key={product.id} item xs>
                    <Card sx={{ width: 250, maxWidth: 250 }}>
                        <CardActionArea onClick={() => { onClickProduct(product) }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={product.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                    }}
                                    style={{ fontWeight: "bold" }}>
                                    {product.title}
                                </Typography>
                                <Typography
                                    align="right"
                                    variant="h5"
                                    style={{ marginTop: "50px", fontWeight: "bold" }}>
                                    ฿{Math.round(product.price)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )}

            <ProductDialog
                key={`product-${productObj.id}`}
                isOpenDialog={isOpenDialog}
                selectedProduct={productObj}
                selectedProductPrice={Math.round(productObj.price)}
                handleCloseDialog={handleCloseDialog}
                handleSetPaymentDialog={handleSetPaymentDialog} />
            <PaymentDialog
                key={`payment-${productObj.id}`}
                isOpenPaymentDialog={isOpenPaymentDialog}
                selectedProduct={productObj}
                selectedProductPrice={Math.round(productObj.price)}
                handleSetPaymentDialog={handleSetPaymentDialog} />
        </Grid>
    )
}