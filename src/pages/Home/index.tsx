// CSS
import { HomeContainer } from './styles'
// Components
import { CoffeeIntro } from './Components/CoffeeIntro'
import { Coffees } from './Components/Coffees'

export function Home() {
  return (
    <HomeContainer>
      {/* Website Introduction */}
      <CoffeeIntro />
      {/* List of all the Coffees */}
      <Coffees />
    </HomeContainer>
  )
}
