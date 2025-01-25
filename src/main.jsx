import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductProvider from './Context/ProductContext.jsx'
import CartProvider from './Context/CartContext.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  
     <StrictMode>
    <QueryClientProvider client={queryClient}>
    <CartProvider>
    <ProductProvider>
       <App />
      </ProductProvider>
    </CartProvider>
      </QueryClientProvider>
      </StrictMode>
  
 
)
