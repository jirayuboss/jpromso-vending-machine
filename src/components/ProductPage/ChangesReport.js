//React
import React, { useState, useEffect } from 'react'

//Material UI
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//constants
import * as paymentConst from '../../constants/paymentConst';

export default function ChangesReport(props) {
    return (
        <Grid container spacing={2}>
            <Grid item align="center" xs={12}>
                <Typography variant="subtitle1" gutterBottom component="div" style={{ color: "black" }}>
                    Please receive your changes
                </Typography>
                <Typography variant="h4" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                    ฿{props.finalChange}
                </Typography>
            </Grid>
            <Grid item align="center" xs={12}>
                <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                    {paymentConst.AVAILABLE_MONEY_TYPE.map((type) =>
                        <Grid item align="center" xs={12}>
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: "bold", color: "black" }}>
                                {type}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ color: "black" }}>
                                {props.changeReportObj[type]}
                            </Typography>
                        </Grid>
                    )}
                </Stack>
            </Grid>
        </Grid>
    )
}