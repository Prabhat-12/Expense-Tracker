import React, {useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    const mystyle = {
        boxShadow: 'black -3px 9px 10px 7px',
        // background:    "linear-gradient( 45deg,#ffffff, #00000000 )",
    }
    
  return ( 
    <Card className={classes.root} style={mystyle}>
        <CardHeader title='Expense Tracker' subheader="Powered by speechly"/>
        <CardContent>
            <Typography align='center' varient='h5'>Total Balance ₹{balance}</Typography>
            <Typography varient='subtitle' style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                <InfoCard />
            </Typography>
            <Divider className={classes.divider} />
            <Form />
        </CardContent>
        <CardContent className={classes.CardContent}> 
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
};

export default Main;
