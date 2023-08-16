
import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Banner from './components/home/Banner'


import Home from './pages/Home';


function App() {


  return (
    <>
      <div className='font-bodyFont'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
