import './App.css';
import Form from './components/form';
import Info from './components/info';
import Error from './components/error';
import { Link, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <Form/>
      <Routes>
        <Route path="/:search/:id" element={<Info/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
