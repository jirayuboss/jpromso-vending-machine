//React, ReactDOM
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

//Material UI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//component
import ConfirmPayment from './ConfirmPayment';
import ChangesReport from './ChangesReport';

//function
import { CalculateChange } from '../../functions/payment';

export default function PaymentDialog(props) {
    const [insertedMoney, setInsertedMoney] = useState(0);
    const [insertedSupportMoney, setInsertedSupportMoney] = useState(0);
    const [changeReportObj, setChangeReport] = useState({});
    const [isConfirmPaymentDialog, setConfirmPaymentDialog] = useState(false);
    const [isPaymentDone, setPaymentStatus] = useState(false);

    const handleInsertMoney = (amount) => {
        setInsertedMoney(insertedMoney + amount);
    }

    const handleSetPaymentDialogStatus = (status) => {
        setConfirmPaymentDialog(status);
    }

    const handleSetPaymentStatus = (status) => {
        setPaymentStatus(status);
    }

    const handleInsertSupportMoney = (amount) => {
        setInsertedSupportMoney(insertedSupportMoney + amount);
    }

    const handleConfirmPayment = async () => {
        const changeObj = await CalculateChange(Math.abs(props.selectedProductPrice - insertedMoney) - insertedSupportMoney);
        setChangeReport(changeObj);
        handleSetPaymentStatus(true);
    }

    const handleEndPaymentProcess = async () => {
        props.handleSetPaymentDialog(false);
        setInsertedMoney(0);
        setInsertedSupportMoney(0);
        setChangeReport({});
        setConfirmPaymentDialog(false);
        setPaymentStatus(false);
    }

    return (
        <Dialog
            open={props.isOpenPaymentDialog}
            onClose={() => { props.handleSetPaymentDialog(false) }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: "bold" }}>
                {isConfirmPaymentDialog ? "Confirm payment" : "Payment"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {!isConfirmPaymentDialog && !isPaymentDone && <Grid container spacing={2}>
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
                        <Grid item align="center" xs={12}>
                            <Typography variant="h3" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                                ฿{props.selectedProductPrice - insertedMoney}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                                left from ฿{props.selectedProductPrice}
                            </Typography>
                        </Grid>
                        <Grid item align="center" xs={12}>
                            <Typography variant="body1" gutterBottom component="div" style={{ color: "black" }}>
                                Please insert 1,5,10 THB coins or 20, 50, 100, 500, 1,000 THB banknotes to purchase item.
                            </Typography>
                        </Grid>

                        {/* FOR TESTING PURPOSE */}
                        <Grid item align="center" xs={12}>
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                                Insert Coins
                            </Typography>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button disabled={(props.selectedProductPrice - insertedMoney) <= 0} onClick={() => { handleInsertMoney(1) }}>1</Button>
                                <Button disabled={(props.selectedProductPrice - insertedMoney) <= 0} onClick={() => { handleInsertMoney(5) }}>5</Button>
                                <Button disabled={(props.selectedProductPrice - insertedMoney) <= 0} onClick={() => { handleInsertMoney(10) }}>10</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item align="center" xs={12}>
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                                Insert Banknotes
                            </Typography>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button disabled={(props.selectedProductPrice - insertedMoney) <= 0} onClick={() => { handleInsertMoney(20) }}>20</Button>
                                <Button disabled={(props.selectedProductPrice - insertedMoney) <= 0} onClick={() => { handleInsertMoney(50) }}>50</Button>
                                <Button disabled={(props.selectedProductPrice - insertedMoney) <= 0} onClick={() => { handleInsertMoney(100) }}>100</Button>
                                <Button disabled={(props.selectedProductPrice - insertedMoney) <= 0} onClick={() => { handleInsertMoney(500) }}>500</Button>
                                <Button disabled={(props.selectedProductPrice - insertedMoney) <= 0} onClick={() => { handleInsertMoney(1000) }}>1000</Button>
                            </ButtonGroup>
                        </Grid>
                        {/* FOR TESTING PURPOSE*/}
                    </Grid>}

                    {isConfirmPaymentDialog && !isPaymentDone && <ConfirmPayment
                        change={props.selectedProductPrice - insertedMoney}
                        insertedSupportMoney={insertedSupportMoney}
                        handleInsertSupportMoney={handleInsertSupportMoney}
                    />}

                    {isPaymentDone && <ChangesReport changeReportObj={changeReportObj} finalChange={Math.abs(props.selectedProductPrice - insertedMoney) - insertedSupportMoney} />}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {!isPaymentDone ?
                    <Button onClick={() => { props.handleSetPaymentDialog(false) }}>
                        Cancel
                    </Button> :
                    <Button onClick={() => { handleEndPaymentProcess() }}>
                        Back to home
                    </Button>
                }
                {!isConfirmPaymentDialog && !isPaymentDone &&
                    <Button onClick={() => { handleSetPaymentDialogStatus(true) }} autoFocus>
                        Purchase
                    </Button>
                }

                {isConfirmPaymentDialog && !isPaymentDone &&
                    <Button onClick={() => { handleConfirmPayment() }} autoFocus>
                        Done
                    </Button>
                }
            </DialogActions>
        </Dialog>
    )
}