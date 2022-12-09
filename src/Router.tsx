// React Router
import { Route, Routes } from 'react-router-dom'
// Import Components
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Delivery } from './pages/Delivery'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    // Website Routes
    <Routes>
      {/* Default Layout of Routes */}
      <Route path="/" element={<DefaultLayout />}>
        {/* Website Rendering of each page */}
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  )
}
