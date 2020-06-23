import React from 'react';
import Img from "./img/img.jpg";

import Video from '../src/img/video.mp4'
import './App.css';

function App() {
  return (
    <div className="App" style={{border:"solid 1px black", maxWwidth:"100vw"}}>
     <h1 className="title red">Your name here</h1>  

     <img src={Img} alt="mon image" />
 
     <img src={"/img.jpg"} alt="mon image" />
     <video width={320} height={240} loop autoPlay>  
        <source src={Video}  /> 
         </video>
    </div>
  );
}
export default App