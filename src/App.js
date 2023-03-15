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
import SelectNumber1 from './pages/SelectNumber/SelectNumber1'
import AccountDetails from './pages/Account-details/AccountDetails'
import Payment from './pages/Payment/Payment'
import ThankYou from './pages/Thankyou/ThankYou'
import CustomerService from './pages/Customer-service/CustomerService'
import Overview from './pages/Overview/Overview'
import FIlterSection from './components/MobilePlans/FIlterSection'


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
          <Route path='/select-Number1' element={ <SelectNumber1/> } />
          <Route path='/accountdetails' element={ <AccountDetails/> }/>
          <Route path='/payment-method' element={ <Payment/> }/>
          <Route path='/payment-method/payment-successful' element={ <ThankYou/> }/>
          <Route path='/payment-method/payment-successful/CustomerService' element={ <CustomerService/> }/>
          <Route path='/overview' element={ <Overview/> }/>
          <Route path='/filtersection' element={ <FIlterSection/> }/>
        </Routes> 
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
