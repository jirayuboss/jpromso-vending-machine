//React
import React, { useState, useEffect } from 'react'

//Material UI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ProductDialog(props) {
    return (
        <Dialog
            open={props.isOpenDialog}
            onClose={props.handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: "bold" }}>
                Selected Product
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Grid container spacing={2}>
                        <Grid item align="center" xs={12}>
                            <Card sx={{ maxWidth: 500 }}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={props.selectedProduct?.image}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                                {props.selectedProduct?.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                                Description
                            </Typography>
                            <Typography variant="body1" gutterBottom component="div" style={{ color: "black" }}>
                                {props.selectedProduct?.description}
                            </Typography>
                        </Grid>
                        <Grid item align="right" xs={12}>
                            <Typography variant="h4" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                                ฿{props.selectedProductPrice}
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { props.handleCloseDialog() }}>Cancel</Button>
                <Button onClick={() => { props.handleSetPaymentDialog(true) }} autoFocus>
                    Buy
                </Button>
            </DialogActions>
        </Dialog>
    )
}