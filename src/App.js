import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import GaleryContainer from './components/Galery/GaleryContainer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Map from './components/Map/Map';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Book } from './components/Book/Book';
import MenuInner from './components/Menu/MenuInner';
import Events from './components/Events/Events';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="" element={<MainPage/>}/>
            <Route path="/home" element={<MainPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/book" element={<Book/>}/>
            <Route path="/menu" element={<MenuInner/>}/>
            <Route path="/events" element={<Events/>}/>
          </Routes>
      <GaleryContainer />
      <Map/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
