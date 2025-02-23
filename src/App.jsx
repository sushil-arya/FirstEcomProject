import React, { createContext, forwardRef, useState } from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import ProductListing from "./pages/productListing/ProductListing";
import Footer from "./components/footer/Footer";

// need to remove this ProductDetail
import ProductDetail from "./pages/productDetail/ProductDetail";
import ProductDetails from "./pages/productDetails/ProductDetails";
import OrderTrackingProgress2 from "./components/orderTrackingProgress/OrderTrackingProgress2";
import OrderTrackingProgress from "./components/orderTrackingProgress/OrderTrackingProgress";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ProductZoom from "./components/productZoom/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetailsComponent/ProductDetailsComponent";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Verify from "./pages/verify/Verify";
import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import MyAccount from "./pages/myAccount/MyAccount";
import MyList from "./pages/myList/MyList";
import Orders from "./pages/orders/Orders";

const MyContext = createContext();

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const[isLogin, setIsLogin] = useState(true);


  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productlist"}
              exact={true}
              element={<ProductListing />}
            />

            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            {/* <Route path={"/order-tracking"} exact={true} element={<OrderTrackingProgress />} /> */}

            <Route
              path={"/order-tracking"}
              exact={true}
              element={
                <OrderTrackingProgress2
                  currentStatus="shipped"
                  orderNumber="ORD-2024-3847"
                  carrier="FedEx"
                  trackingNumber="FX123456789"
                />
              }
            />

            <Route path={"/login"} exact={true} element={<Login />} />

            <Route path={"/register"} exact={true} element={<Register />} />

            <Route path={"/verify"} exact={true} element={<Verify />} />

            <Route
              path={"/forgot-password"}
              exact={true}
              element={<ForgotPassword />}
            />

            <Route
              path={"/cart"}
              exact={true}
              element={<Cart />}
            />

          <Route
              path={"/checkout"}
              exact={true}
              element={<Checkout />}
            />

            <Route
              path={"/my-account"}
              exact={true}
              element={<MyAccount />}
            />

            <Route
              path={"/my-list"}
              exact={true}
              element={<MyList />}
            />

          <Route
              path={"/my-orders"}
              exact={true}
              element={<Orders />}
            />

            {/* need to remove this before final code */}
            {/* <Route path={"/productlist"} exact={true} element={<ProductDetail />} /> */}
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        open={openProductDetailsModal}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-describedby="alert-dialog-slide-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button
              className="!w-[40px] h-[40px] !min-w-[40px] !rounded-full !text-[#666] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]"
              onClick={handleCloseProductDetailsModal}
            >
              <IoCloseSharp className="!text-[20px]" />
            </Button>

            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleCloseProductDetailsModal}>Disagree</Button>
          <Button onClick={handleCloseProductDetailsModal}>Agree</Button>
        </DialogActions> */}
      </Dialog>


    </>
  );
};

export default App;

export { MyContext };
