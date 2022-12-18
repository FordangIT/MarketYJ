import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Contains from './pages/Contains';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/contains" element={<Contains />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
