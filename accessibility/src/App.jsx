import { useState } from 'react';
import './App.css';
import Menu from './Menu';

function App() {
  const [showMenu, setShowMenu] = useState('');

  return (
    <>
     <div style={{display: 'flex', columnGap: '10px'}}>
      <div tabIndex={0} style={{position: 'relative'}}>
      <label onClick={() => setShowMenu(s => s ? '' : 'menu')}>menu</label>
        {showMenu === 'menu' && <Menu items={['open', 'close', 'save as']} />}
      </div>
      <div tabIndex={0}>file</div>
      <div tabIndex={0}>view</div>
      <div tabIndex={0}>edit</div>
      <div tabIndex={0}>help</div>
     </div>
    </>
  )
}

export default App
