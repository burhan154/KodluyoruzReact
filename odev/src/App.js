import React from 'react';
import GetData from './components/GetData';

function App() {

  GetData(1).then((result) => {
    console.log(result);
  })
  
  return (
    <div>
      <h1>User Data</h1>
      <p>For User Data Open Console</p>
    </div>
  );
};

export default App;
