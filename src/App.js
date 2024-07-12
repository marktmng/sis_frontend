import React from 'react';
import "./App.css";
import Topbar from './components/Topbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Lecturer from './components/Lecturer';
import Students from './components/Students';
import Parents from './components/Parents';
import Program from './components/Program';
import StudentMark from './components/StudentMark';
import TutionFee from './components/TutionFee';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>        
      <Route path="/" element={<Home/>}/>
      <Route path="/lecturer" element={<Lecturer/>}/>
      <Route path="/students" element={<Students/>}/>
      <Route path="/parents" element={<Parents/>}/>
      <Route path="/program" element={<Program/>}/>
      <Route path="/studentmark" element={<StudentMark/>}/>
      <Route path="/tutionfee" element={<TutionFee/>}/>

      </Routes>
    </div>
  );
}

export default App;
