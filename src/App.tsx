// Components
import { Router } from './Router'
// Routes
import { BrowserRouter } from 'react-router-dom'
// Styles
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
// Context
import { DeliveryData } from './context/DeliveryData'

export function App() {
  return (
    // Themes
    <ThemeProvider theme={defaultTheme}>
      {/* Routers */}
      <BrowserRouter>
        {/* Context Data */}
        <DeliveryData>
          {/* Routes */}
          <Router />
        </DeliveryData>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
