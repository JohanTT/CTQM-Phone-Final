import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initialstate
const InitialState = {
    transactions: [
        { id: 1, name: 'Flower', money: -20 },
        { id: 2, name: 'Salary', money: 200 },
        { id: 3, name: 'Book', money: -10 },
        { id: 4, name: 'Camera', money: 150 },
    ]
}

// Create context
export const GlobalContext = createContext(InitialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    // Action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}