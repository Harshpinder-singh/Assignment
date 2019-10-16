import React from 'react';
import './App.css';
import TableShow from './components/tableShow'
import ShowChart from './components/showChart'

function App() {
  return (
    <div className="App">
      <TableShow /> {/*displaying the table */}
      <ShowChart /> {/*displaying the chart created with google charts */}
    </div>
  );
}

export default App;
