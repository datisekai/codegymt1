import React from "react";

const App = () => {
  const value = 0;

  return (
    <div>
      <h1>Default value</h1>
      <div id='default-value' className='default-value'>
        {value}
      </div>
    </div>
  );
};

export default App;
