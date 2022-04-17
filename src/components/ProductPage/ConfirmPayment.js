//React
import React, { useState, useEffect } from 'react'

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

export default function ConfirmPayment(props) {
    return (
        <Grid container spacing={2}>
            {(props.change < 0) ? (<Grid item align="center" xs={12}>
                <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                    Do you want to keep all change or give some to supporting our JPROMSO to be better and better?
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div" style={{ color: "black" }}>
                    You still have <span style={{ fontSize: "2rem", fontWeight: "bold" }}>฿{Math.abs(props.change) - props.insertedSupportMoney}</span> left for your change.
                </Typography>
            </Grid>) : <Grid item align="center" xs={12}>
                <Typography variant="subtitle1" gutterBottom component="div" style={{ color: "black" }}>
                    Purchase successfully.
                </Typography>
            </Grid>}
            <Grid item align="center" xs={12}>
                <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                    Give some support to JPROMSO
                </Typography>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button disabled={(Math.abs(props.change) - props.insertedSupportMoney) < 20} onClick={() => { props.handleInsertSupportMoney(20) }}>20</Button>
                    <Button disabled={(Math.abs(props.change) - props.insertedSupportMoney) < 50} onClick={() => { props.handleInsertSupportMoney(50) }}>50</Button>
                    <Button disabled={(Math.abs(props.change) - props.insertedSupportMoney) < 100} onClick={() => { props.handleInsertSupportMoney(100) }}>100</Button>
                    <Button disabled={(Math.abs(props.change) - props.insertedSupportMoney) < 500} onClick={() => { props.handleInsertSupportMoney(500) }}>500</Button>
                </ButtonGroup>
            </Grid>
            <Grid item align="center" xs={12}>
                <Button disabled={(Math.abs(props.change) - props.insertedSupportMoney) <= 500} fullWidth variant="contained" onClick={() => { props.handleInsertSupportMoney(Math.abs(props.change) - props.insertedSupportMoney) }}>
                    All(฿{Math.abs(props.change) - props.insertedSupportMoney})
                </Button>
            </Grid>

            <Grid item align="center" xs={12}>
                <Typography variant="subtitle1" gutterBottom component="div" style={{ color: "black" }}>
                    <span style={{ fontSize: "1rem", fontWeight: "bold" }}>฿{props.insertedSupportMoney}</span> from you are given to support our JPROMSO.
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div" style={{ color: "black" }}>
                    Thanks for supporting us
                </Typography>
            </Grid>
        </Grid>
    )
}