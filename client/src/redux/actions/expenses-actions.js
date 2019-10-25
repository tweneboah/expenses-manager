import uuid from "uuid";
import axios from 'axios';
//ACTIONS



//CREATE EXPENSES

export const addExpense = (formData) => {
  return (dispatch) => {
    axios.post('api/expenses', formData).then((res) => {
      return dispatch({
        type: 'ADD_EXPENSE',
        payload: res.data
      })
    })
  }
};


export const fetchExpenses = () => {
  return (dispatch) => {
    axios.get('api/expenses').then((res) => {
      return dispatch({
        type: 'FETCH',
        payload: res.data
      })
    })
  }
}

