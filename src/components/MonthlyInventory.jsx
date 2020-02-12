import React from 'react';
import PropTypes from "prop-types";


function MonthlyInventory(props) {
    let monthlyStyle = {
      border: '2px solid black',
      borderRadius: '1000px',
      margin: '5px',
      padding: '15px',
      margin: '5px',
      padding: '15px',
      backgroundColor: 'white',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      fontSize: '25px'
    }
    let listStylez = {
      listStyleType: 'none',
      paddingLeft: '0'
    }


    function get_selection(props) {
      let table = []
      for(let i = 0; i < props.selection.length; i++){
        table.push(React.createElement('li', null, props.selection[i]))
      };
      return table
    }


    return (
      <div className="MonthlyInventory" id ="MonthlyInventory" style={monthlyStyle}>
      <h3>Month:{props.month}</h3>
      <h5>Selection:</h5>
      <ul style={listStylez}>
      {get_selection(props)}
      </ul>
      </div>
    );
  }

  MonthlyInventory.propTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  export default MonthlyInventory;
