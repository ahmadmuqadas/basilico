import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNav from './User Components/MainNav';
import Home from './User Components/Home';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
</Routes>
</BrowserRouter>

    </>
  );
}

export default App;
