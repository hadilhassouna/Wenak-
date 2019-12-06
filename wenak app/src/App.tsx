import React from 'react';
import Toolbar from './components/Toolbar/Toolbar.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer.jsx';
import Backdrop from './components/Backdrop/Backdrop.jsx'
const App: React.FC = () => {
  return (
    <div style={{height: '100%'}}>
      <Toolbar />
      <SideDrawer />
      <Backdrop />
      <main style={{marginTop: '64px'}}>
      <p>This is the content of the page</p>
      </main>
      
    </div>
  );
}
export default App;
