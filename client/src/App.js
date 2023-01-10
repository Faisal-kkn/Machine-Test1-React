import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Pages/Main/Main'
import Home from './Pages/Home/Home'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} >
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 