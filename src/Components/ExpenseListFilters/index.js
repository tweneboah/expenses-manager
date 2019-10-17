import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../../redux/actions/filters-actions";
import store from "../../redux/store";

const ExpenseListFilters = ({ filters }) => {

  const onInputChane = e => {
    e.preventDefault();
    store.dispatch(setTextFilter(e.target.value));
  };


  //onSelectChange method

  const onSelectChange = (e) => {
     //console.log(e.target.value)

     if(e.target.value === 'date'){
         store.dispatch(sortByDate())
     }else {
      store.dispatch(sortByAmount())
     }
  }
 
  return (
    
    <div>
      <input type="text" value={filters.text} onChange={onInputChane} />

      <select value = {filters.sortBy} onChange={onSelectChange}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
