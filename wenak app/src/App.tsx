import React from 'react';
import Toolbar from './components/Toolbar/Toolbar.jsx';
import Sidebar from './components/Toolbar/Sidebar.jsx';

import './App.css';
// import SideDrawer from './components/SideDrawer/SideDrawer.jsx';
// import Backdrop from './components/Backdrop/Backdrop.jsx'

const App: React.FC = () => {
 
  return (
    <div>
      <Sidebar />
      <Toolbar />
      {/* {SideDrawer}
      {Backdrop} */}
      <main >
      
      </main>
      
    </div>
  );
}

export default App;
