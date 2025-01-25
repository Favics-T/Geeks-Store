import { StrictMode,Suspense,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductProvider from './Context/ProductContext.jsx'
import CartProvider from './Context/CartContext.jsx'
import WishList from './Pages/WishList.jsx'
import WishListProvider from './Context/WishListContext.jsx'
import ContextWrapper from './Context/ContextWrapper.jsx'

const App = lazy(()=> import('./App.jsx'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')).render(
  
  <QueryClientProvider client={queryClient}>
  <CartProvider>
    <ProductProvider>
      
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
     
    </ProductProvider>
  </CartProvider>
</QueryClientProvider>

  
 
)
