// Components
import { Header } from '../../components/Header'
// Outlet
import { Outlet } from 'react-router-dom'
// CSS
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
