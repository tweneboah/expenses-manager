//SET_TEXT_FILTER
export const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT_FILTER",
        payload: text
    };
};

