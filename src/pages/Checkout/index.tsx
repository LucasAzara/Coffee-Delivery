// Components
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { CheckoutItems } from './Components/CheckoutItems'
import { UserAddress } from './Components/UserAddress'
import { UserPayment } from './Components/UserPayment'
// CSS
import {
  CheckoutContainerForm,
  CheckoutTitle,
  PurpleIcon,
  UserData,
  UserInformation,
  YellowIcon,
} from './styles'
// Forms
// useForm
import { FormProvider, useForm } from 'react-hook-form'
// Validator resolver for react hook form ( able to use validation in react hook form )
import { zodResolver } from '@hookform/resolvers/zod'
// Schema Validator
import * as zod from 'zod'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../context/DeliveryData'
// Sweet Alert
import Swal from 'sweetalert2'
// Router
import { useNavigate } from 'react-router-dom'
import { IPayment } from '../../reducers/cart/action'

// ----------------------------------------------------

// Validate Form
const cepMask = `[0-9]{5}-[0-9]{3}`
const newAddressValidationSchema = zod.object({
  userCep: zod
    .string()
    .max(9)
    .regex(new RegExp(cepMask), `CEP tem que estar no formato 00000-000`),
  userStreet: zod.string().min(1, 'O endereço da rua é obrigatório'),
  userStreetNumber: zod
    .string()
    .min(1, 'Numero obrigatório, se não tiver coloca s/n'),
  userExtra: zod.string(),
  userSector: zod.string().min(1, 'O bairro/setor é obrigatório'),
  userCity: zod.string().min(1, 'A cidade é obrigatório'),
  userState: zod
    .string()
    .min(1, 'O Estado é obrigatório')
    .max(2, 'Sigla do Estado'),
})

type newAddressFormData = zod.infer<typeof newAddressValidationSchema>

// ----------------------------------------------------

export function Checkout() {
  // Navigate Manually to another page
  const navigate = useNavigate()

  const { totalItems } = useContext(CoffeeContext)

  // ----------------------------------------------------

  // Payment

  const [paymentMethod, setPaymentMethod] = useState<IPayment>(undefined)

  const handlePaymentMethod = (payment: IPayment) => {
    setPaymentMethod(payment)
  }

  // ----------------------------------------------------

  // react hook form methods
  const useNewAddressForm = useForm<newAddressFormData>({
    resolver: zodResolver(newAddressValidationSchema),
    defaultValues: {
      userCep: '',
      userStreet: '',
      userStreetNumber: '',
      userExtra: '',
      userSector: '',
      userCity: '',
      userState: '',
    },
  })

  const { handleSubmit } = useNewAddressForm

  // ----------------------------------------------------

  // Context Deploy Reducer Action

  const confirmCartAction = (data: newAddressFormData) => {
    if (totalItems === 0) {
      // Error when there is no Drinks in the Cart
      errorMessage('Sem Bebidas')
    } else if (!paymentMethod) {
      // No payment method error
      errorMessage('Sem Escolha de Pagamento')
    } else {
      // Store Address Correctly
      const address = constructAddress(data)

      // Loading Screen the redirect page with parameters
      loadingScreen().then(() =>
        navigate('/delivery', {
          state: { address, paymentMethod },
        }),
      )
    }
  }

  return (
    <CheckoutContainerForm onSubmit={handleSubmit(confirmCartAction)}>
      {/* User Data for Delivery */}
      <UserData>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        {/* Address */}
        <UserInformation>
          <YellowTitle />
          <FormProvider {...useNewAddressForm}>
            <UserAddress />
          </FormProvider>
        </UserInformation>
        {/* Payment */}
        <UserInformation>
          <PurpleTitle />
          <UserPayment handlePaymentMethod={handlePaymentMethod} />
        </UserInformation>
      </UserData>
      {/* Coffee Data */}
      <UserData>
        <CheckoutTitle>Café selecionados</CheckoutTitle>
        <CheckoutItems />
      </UserData>
    </CheckoutContainerForm>
  )
}

// ----------------------------------------------------

const YellowTitle = () => {
  return (
    <div>
      <YellowIcon>
        <MapPinLine size={22} />
      </YellowIcon>
      <div>
        <h2>Endereço de Entrega</h2>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </div>
    </div>
  )
}

const PurpleTitle = () => {
  return (
    <div>
      <PurpleIcon>
        <CurrencyDollar size={22} />
      </PurpleIcon>
      <div>
        <h2>Pagamento</h2>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>
    </div>
  )
}

// ----------------------------------------------------

const errorMessage = (message: string) => {
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
  })
}

const loadingScreen = () => {
  return Swal.fire({
    title: 'Enviando seu Pedido!',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading(null)
    },
  })
}

const constructAddress = (data: newAddressFormData) => {
  return {
    cep: data.userCep,
    streetName: data.userStreet,
    streetNumber: data.userStreetNumber,
    extra: data.userExtra,
    sector: data.userSector,
    city: data.userCity,
    state: data.userState,
  }
}

// ----------------------------------------------------
