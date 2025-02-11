import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ProductListing from './pages/productListing/ProductListing'
import Footer from './components/footer/Footer'

// need to remove this ProductDetail
import ProductDetail from './pages/productDetail/ProductDetail'
import ProductDetails from './pages/productDetails/ProductDetails'
import OrderTrackingProgress2 from './components/orderTrackingProgress/OrderTrackingProgress2'
import OrderTrackingProgress from './components/orderTrackingProgress/OrderTrackingProgress'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route path={"/productlist"} exact={true} element={<ProductListing />} />


          <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails />} />
          <Route path={"//order-tracking"} exact={true} element={<OrderTrackingProgress />} />
{/*               
          <Route path={"//order-tracking"} exact={true} element={<OrderTrackingProgress2 
                  currentStatus="shipped"
                  orderNumber="ORD-2024-3847"
                  carrier="FedEx"
                  trackingNumber="FX123456789"
                />} /> */}

          {/* need to remove this before final code */}
          <Route path={"/productdetail"} exact={true} element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App