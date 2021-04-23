import React, { useState } from 'react';
import Title from './comps/Title';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Uploadform from './uploadform';

function App() {

  const[selectedImage,setSelectedImage]=useState(null);

  return (
    <div className="App">
      <Title/>
      <Uploadform/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;


