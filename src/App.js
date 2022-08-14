import './App.css';
import Header from './components/Pages/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Footer from './components/Pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
