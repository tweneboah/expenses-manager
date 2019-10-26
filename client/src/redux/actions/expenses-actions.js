import uuid from 'uuid';
import axios from 'axios';
// //ACTIONS



// //CREATE EXPENSES

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
        type: 'FETCH_EXPENSES',
        payload: res.data
      })
    })
  }
}




// // ADD_EXPENSE
// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

// // REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });

// // EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// });
