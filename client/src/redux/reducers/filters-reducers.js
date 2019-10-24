import moment from "moment";

//FILTERS REDUCER

const filtersDefaultState = {
  text: "",
  sortBy: "", //date or amount
  startDate: moment().startOf("month"), //we want to set default to at the begining of the current month
  endDate: moment().endOf("month") //we want to set default to at the end of the current month
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };

    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.payload
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
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
