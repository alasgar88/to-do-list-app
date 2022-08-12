import React from "react";

const NoResults = () => {
  return (
    <div className='no-result'>
      <div className='rectangle'>
        <div className='circle'>
          <div className='cards'>
            <div className='small-card'>
              <div className='short-bar'></div>
              <div
                className='long-bar'
                style={{ backgroundColor: "white" }}
              ></div>
            </div>
            <div className='big-card'>
              <div className='short-bar'></div>
              <div className='long-bar'></div>
              <div className='short-bar'></div>
              <div className='long-bar'></div>
              <div className='short-bar'></div>
              <div className='long-bar'></div>
            </div>
          </div>
        </div>
      </div>
      <h2 className='no-result-heading'>Heç bir tapşırıq yoxdur</h2>
    </div>
  );
};

export default NoResults;
