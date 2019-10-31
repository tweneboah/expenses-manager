import moment from 'moment';

//FILTERS REDUCER

const filtersDefaultState = {
    text: "",
    startDate: moment().startOf("month"), //we want to set default to at the begining of the current month
    endDate: moment().endOf("month") //we want to set default to at the end of the current month


};

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {


        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.payload
            };

        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.payload
            };

        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.payload

            };
        default:
            return state;
    }
};

export default filtersReducer;
