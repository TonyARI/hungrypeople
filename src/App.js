import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import GaleryContainer from './components/Galery/GaleryContainer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Map from './components/Map/Map';
import {HashRouter, Route, Routes} from "react-router-dom";
import { Book } from './components/Book/Book';
import MenuContainer from './components/Menu/MenuContainer';
import Events from './components/Events/Events';
import Specialties from './components/Specialties/Specialties';

function App() {
  return (
    <div>
      <HashRouter>
        <Header/>
            <Routes>
              <Route path="" element={<MainPage/>}/>
              <Route path="/home" element={<MainPage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/book" element={<Book/>}/>
              <Route path="/menu" element={<MenuContainer/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/specialties" element={<Specialties/>}/>
            </Routes>
        <GaleryContainer />
        <Map/>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
