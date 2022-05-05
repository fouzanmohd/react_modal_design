import Modal from './Modal';
import React, {useState} from 'react'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='home-page'>
      
      <button className='modal-btn' onClick={()=>setModalOpen(true)}>Modal</button>
      <Modal open={modalOpen} onClose={()=>setModalOpen(false)} />
    </div>
  );
}

export default App;
