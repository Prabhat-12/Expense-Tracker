import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut} from 'react-chartjs-2';

import useStyles from './styles'
import useTransaction from '../../useTransaction';

import 'chart.js/auto';

const Details = ({title,subheader}) => {
    const classes = useStyles();
    const { total, chartData} = useTransaction(title);
    const mystyle = {
        boxShadow: 'black -3px 9px 10px 7px',
        background:    "linear-gradient( 210deg,#ffffff, #000000a1 )",
    }
  return (
      <Card className={ title === "Income" ? classes.income : classes.expense} style={mystyle}>
          <CardHeader title={title } subheader={subheader} />
          <CardContent>
              <Typography variant='h5'>₹{total}</Typography>
              <Doughnut data = {chartData}/>
          </CardContent>
      </Card>
  );
};

export default Details;
