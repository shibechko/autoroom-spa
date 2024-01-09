import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './componenets/header/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    <div># Footer</div>
    </>
  );
}

export default App;
