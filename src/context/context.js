import React , { useReducer, createContext} from "react";
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":3500,"category":"Bills","type":"Expense","date":"2022-02-21","id":"2ce357c1-46da-422e-864b-f0cdae1ea15d"},{"amount":14000,"category":"Lottery","type":"Income","date":"2022-02-24","id":"8f83c6a2-f242-4995-b0f8-9ae73714074b"},{"amount":1000,"category":"Entertainment","type":"Expense","date":"2022-02-24","id":"2e0ce3be-b83e-44cf-9990-cf21997a3a29"},{"amount":5500,"category":"Travel","type":"Expense","date":"2022-02-26","id":"5bee68f6-b819-4d7e-a426-22c16784078d"},{"amount":4500,"category":"Rental income","type":"Income","date":"2022-02-03","id":"c653b8ed-a2ab-4047-9e24-ef5686094099"},{"amount":7000,"category":"Business","type":"Income","date":"2022-02-24","id":"57750796-5a78-452d-ba0e-5400dc305f09"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) => {dispatch({ type: 'DELETE_TRANSACTION', payload: id});}
    const addTransaction = (transaction) => {dispatch({ type: 'ADD_TRANSACTION', payload: transaction});}

    const balance = transactions.reduce((acc,currVal) =>{
        return(currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    },0)

    return (
        <ExpenseTrackerContext.Provider 
             value={{
                 deleteTransaction,
                 addTransaction,
                 transactions,
                 balance
             }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
