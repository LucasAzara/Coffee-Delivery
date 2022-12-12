import { MapPinLine } from 'phosphor-react'
import { YellowIcon } from '../../styles'
import { UserForm } from './styles'

export function UserAddress() {
  return (
    <UserForm>
      <input type="text" name="CEP" id="userCep" placeholder="CEP" />
      <input type="text" name="Street" id="userStreet" placeholder="Rua" />
      <input
        type="text"
        name="StreetNumber"
        id="userStreetNumber"
        placeholder="Número"
      />
      <input
        type="text"
        name="Extra"
        id="userExtra"
        placeholder="Complemento"
      />
      <input type="text" name="Sector" id="userSector" placeholder="Bairro" />
      <input type="text" name="City" id="userCity" placeholder="Cidade" />
      <input type="text" name="State" id="userState" placeholder="UF" />
    </UserForm>
  )
}
