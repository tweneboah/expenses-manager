import React from 'react';
import {connect } from 'react-redux';
import {setTextFilter } from '../../redux/actions/filters-actions'
import store from '../../redux/store';

const ExpenseListFilters = ({filters}) => {
  
  const onInputChane = (e) => {
     e.preventDefault()
     store.dispatch(setTextFilter(e.target.value))
     
  }
    return (
        
      <div>
          <input type ='text' value = {filters.text} onChange = {onInputChane}/>
      </div>
    );
};

const mapStateToProps = (state) => {
   return {
     filters: state.filters
   }
}

export default connect(mapStateToProps) (ExpenseListFilters);