import React, {useContext} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import { Delete} from '@material-ui/icons';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import useStyles from './Style';
import { ExpenseTrackerContext } from '../../../context/context';

const List = () => {
    const classes = useStyles();
    const { deleteTransaction, transactions} = useContext(ExpenseTrackerContext)

    // const transaction = [
    //     {id:1, type: "Income", category: "Salary", amount: 50, date: "Sat Feb 12"},
    //     {id:2, type: "Expense", category: "Car ", amount: 500, date: "Sat Feb 12"},
    //     {id:3, type: "Income", category: "Online", amount: 250, date: "Sat Feb 12"}
    // ]; 

  return (
      <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) =>(
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <AccountBalanceWalletIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label='delete' onClick={() => deleteTransaction(transaction.id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
      </MUIList>
  )
};

export default List;
