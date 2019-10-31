//SET_TEXT_FILTER
export const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT_FILTER",
        payload: text
    };
};


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
