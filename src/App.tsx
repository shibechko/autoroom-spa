import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './componenets/footer/Footer';
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
      <Footer></Footer>
    </>
  );
}

export default App;
