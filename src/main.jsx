
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider  from './Context/ShopContext.jsx'   // ✅ add this import

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <ShopContextProvider>        {/* ✅ wrap App inside provider */}
      <App />
    </ShopContextProvider>
  //</StrictMode>,
)
