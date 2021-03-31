import Header from "./components/header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from "./components/footer/Footer";
import LoginForm from "./components/loginForm/LoginForm";
import { Page404 } from "./components/page404/Page404";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/AboutUs";
import OrderCompleted from "./components/orderCompleted/OrderCompleted";
import Home from "./components/Home/Home";
import GridDefault from "./components/gridDefault/GridDefault";
import ProductDetail from "./components/productDetail/ProductDetail";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import SubCat from './components/subCat/subCat'
import { useState } from "react";
function App() {
  const usersList = [{
    name: 'Zain UL Abideen',
    email: 'devolper@gmail.com',
    pass: '123'
  }, {
    name: 'Unnati Rana',
    email: 'unnati_k_rana@yahoo.in',
    pass: '12345'
  },
  ]
  const newUser = (user) => {
    usersList.push(user)
  }





  const loginDecider = (id, pass) => {
    const flag = usersList.filter((users) => {
      return (users.email === id && users.pass === pass) ? users : null
    })
    if (flag.length > 0) {
      toast.success(`Welcome ${flag[0].name}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
    } else {
      toast.error('Invalid User ! Try Again', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
    }
  }


  const [state, setstate] = useState(false)
  const [catagory, setcatagory] = useState("")
  const [catagoryPage, setcatagoryPage] = useState({})
  const [chart, setchart] = useState(0)
  console.log(catagoryPage);




  return (
    <div>
      <BrowserRouter>
        <Header chartNumber={chart} />
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/login'> <LoginForm loginDecider={loginDecider} /> </Route>
        <Route exact path='/contact'>  <ContactUs /> </Route>
        <Route exact path='/gridDefault'> <GridDefault setcatagory={setcatagory} /> </Route>
        <Route exact path='/subCat'> <SubCat catagory={catagory} setcatagoryPage={setcatagoryPage} /> </Route>
        <Route exact path='/about'> <AboutUs /> </Route>
        <Route exact path='/orderCompleted'> <OrderCompleted /> </Route>
        <Route exact path='/productDetail'> <ProductDetail catagoryPage={catagoryPage} chart={chart} setchart={setchart} /> </Route>
        <Route exact path='/signUp'>  <SignUp state={state} setstate={setstate} newUser={newUser} /> </Route>
        {/* <Route path='/404' component={Page404} />
        <Redirect from='*' to='/404' /> */}
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
