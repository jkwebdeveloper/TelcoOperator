import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import MobilePlans from './pages/MobilePlans/MobilePlans'
import Devices from './components/Devices/Devices'
import DevicesDetail from './pages/Devices/DevicesDetail'
import NavigationMenu from './components/NavigationMenu'
import FixedOfficers from './pages/Fixedlineservice/FixedOfficers'
import SelectNumber from './pages/SelectNumber'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile-plans" element={<MobilePlans />} />
          <Route path="/devices" element={ <Devices />} />
          <Route path="/device-details"  element={ <DevicesDetail /> }/>
          <Route path='/select-number' element={ <SelectNumber/> }/>
          <Route path='/fixed-line-service' element={ <FixedOfficers /> }/>
          <Route path='' element={ <NavigationMenu/> }/>
        </Routes> 
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
