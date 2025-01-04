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

const Layout = ()=>{
  return(
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
function App() {
  

  return (
    
      <div>
      
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


      </Route>
     </Routes>

    </Router>
       {/* </HashRouter> */}
       
      </div>
      
  )
}

export default App
