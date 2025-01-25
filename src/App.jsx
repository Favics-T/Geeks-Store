import { 
  HashRouter as Router, Routes, Route,Outlet } from "react-router-dom"
import Nav from './Components/Nav.jsx'
import Footer from "./Components/Footer.jsx"
import Home from "./Pages/Home.jsx"
import Men from "./Pages/Men.jsx"
import Women from "./Pages/Women.jsx"
import Collection from "./Pages/Collection.jsx"
import Cart from "./Pages/Cart.jsx"
import WishList from "./Pages/WishList.jsx"
import Hero from "./Components/Hero.jsx"
import Product from "./Components/Product.jsx"
import Cart2 from "./Pages/Cart2.jsx"
import SignIn from "./Pages/SignIn.jsx"
import SignUp from "./Pages/SignUp.jsx"

const Layout = ()=>{
  return(
    <div className="">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
function App() {
  

  return (
    
      <div className=" overflow-x-hidden">
      
       {/* <HashRouter> */}
       <Router>
     <Routes>
     <Route path="/" element={<Layout />} >
      <Route index element = {<Home />} /> 
      <Route path="home" element={<Home />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<WishList />}/>
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="collection" element={<Collection />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="sigin" element={<SignIn />} />
            <Route  path="signup" element={<SignUp />} />

      </Route>
     </Routes>

    </Router>
       {/* </HashRouter> */}
       
      </div>
      
  )
}

export default App
