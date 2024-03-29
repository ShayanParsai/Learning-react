import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filters = () => {
  const [filterOneActive, setFilterOneActive] = useState(false);
  const [filterTwoActive, setFilterTwoActive] = useState(false);

  const toggleFilterOne = () => setFilterOneActive(!filterOneActive);
  const toggleFilterTwo = () => setFilterTwoActive(!filterTwoActive);

  const buttonStyle = {
    border: '2px solid black',
    fontSize: '1.25rem',
    padding: '.3rem 1rem', 
    color: 'white',
    backgroundColor: '#007bff',
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center my-3">
        {/* Hide below 1% */}
        <div className="col-auto">
          <button
            className={`btn btn-lg text-stroke ${filterOneActive ? '' : 'btn-outline-primary'}`}
            onClick={toggleFilterOne}
            style={buttonStyle}
          >
            Hide below 1%
          </button>
        </div>
        {/*  Hide below 0.5%  */}
        <div className="col-auto">
          <button
            className={`btn btn-lg text-stroke ${filterTwoActive ? '' : 'btn-outline-primary'}`}
            onClick={toggleFilterTwo}
            style={buttonStyle}
          >
            Hide below 0.5%
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
