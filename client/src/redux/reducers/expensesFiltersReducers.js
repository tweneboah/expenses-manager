
//FILTERS REDUCER

const filtersDefaultState = {
    text: ""

};

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {


        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.payload
            };

        default:
            return state;
    }
};

export default filtersReducer;
