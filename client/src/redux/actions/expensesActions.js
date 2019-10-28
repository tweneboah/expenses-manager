
import axios from "axios";
//ACTIONS

//Actions make changes to redux store through reducers.
//Action holds the data to be added to redux store through reducers
//Actions can send data to reducers by allowing the user to pass in data to the reducer or by the action strictly sending from a server to the store


export const addExpense = (formData) => {
    return dispatch => {
        axios.post("api/expenses", formData).then(() => {
            return dispatch({
                type: "ADD_EXPENSE",
                payload: formData
            });
        });
    };
};


export const fetchExpenses = () => {
    return dispatch => {
        axios.get("api/expenses").then(res => {
            return dispatch({
                type: "FETCH_EXPENSES",
                payload: res.data
            });
        });
    };
};
//REMOVE_EXPENSE ACTION

export const deleteExpense = (id) => {
    return ((dispatch) => {
        axios.delete(`/api/expenses/${id}`).then(() => {
            dispatch({
                type: 'DELETE_EXPENSE'
            })
        })
    })
}

//EDIT_EXPENSE
export const editExpense = (id, updates, history) => {
    return (dispatch) => {
        axios.post(`/api/expense/update/${id}`, updates).then((res) => {
            dispatch({
                type: 'EDIT_EXPENSE',
                payload: res.data
            })
        })
    }
};
