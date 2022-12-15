import { useFormContext } from 'react-hook-form'
import { UserForm } from './styles'

// Create a verfication for Form and a way to store them into context

export function UserAddress() {
  const { register } = useFormContext()

  return (
    <UserForm>
      <input
        type="text"
        id="userCep"
        placeholder="CEP"
        required
        {...register('userCep')}
      />
      <input
        type="text"
        id="userStreet"
        placeholder="Rua"
        required
        {...register('userStreet')}
      />
      <input
        type="text"
        id="userStreetNumber"
        placeholder="Número"
        required
        {...register('userStreetNumber')}
      />
      <input
        type="text"
        id="userExtra"
        placeholder="Complemento"
        {...register('userExtra')}
      />
      <input
        type="text"
        id="userSector"
        placeholder="Bairro"
        required
        {...register('userSector')}
      />
      <input
        type="text"
        id="userCity"
        placeholder="Cidade"
        required
        {...register('userCity')}
      />
      <input
        type="text"
        id="userState"
        placeholder="UF"
        required
        {...register('userState')}
      />
    </UserForm>
  )
}
