'use client';


import * as React from 'react';
import nightview from '../img/nightview.jpg'
import {
    Paper, Grid, Avatar, IconButton, CardContent, CardHeader,
    Box, InputBase, Card
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

function page() {
    return (
        <Box sx={{ marginTop: 20 }}>
            <image src={nightview} alt='NightView' width={300} height={150} />
            <Typography variant='h6'>night view</Typography>
            <Typography variant='body1'>real eyes realise real lies</Typography>
        </Box>
    );
}
export default page;