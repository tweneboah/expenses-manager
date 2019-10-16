//SET_TEXT_FILTER
export const setTextFilter = (text = "") => {
    return {
      type: "SET_TEXT_FILTER",
      payload: text
    };
  };
  
  //SORT BY DATE
  
  //This action won't accept any value but it will display a static value so we don't pass anything to it
  

  
  //SORT BY AMOUNT
  
 export const sortByAmount = () => {
    return {
      type: "SORT_BY_AMOUNT"
    };
  };
  
  //START END DATE
  
  //The argument passed to this action when dispatching it is not an object or array so we don't have to destructure it
  
  export const setStartDate = date => {
    return {
      type: "SET_START_DATE",
      payload: date
    };
  };
  
  //START END DATE
  
 export const setEndDate = date => {
    return {
      type: "SET_END_DATE",
      payload: date
    };
  };
  