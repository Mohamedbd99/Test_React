// App.js

import React from 'react';
import './App.css';
import Header from './component/header';
import Group1 from './component/Group1';
import Header2 from './component/Header2';
import Header3 from './component/Header3';
import Corps1 from './component/Corps1';
import Corps2 from './component/Corps2';

function App() {
  return (
    <div>
      <Header />
      <Group1 />
      <div className="centered-rectangle">
        <div className="header1">
          <Header2/>
        </div>
        <div className="content1">
          <Corps1/>
        </div>
        <div className="header2">
          <Header3/>
        </div>
        <div className="content2">
          <Corps2/>
        </div>
      </div>
    </div>
  );
}

export default App;
