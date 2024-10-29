import { useForm, FieldErrors, UseFormReturn, FormProvider } from 'react-hook-form'
import { getRenderCount } from '../../utils/getRenderCount';
import { FoodDeliveryFormType } from '../../types';
import { CheckoutForm } from './components/CheckoutForm';
import { DeliveryAddressForm } from './components/DeliveryAddressForm';
import { FoodDeliveryMaster } from './components/FoodDeliveryMaster';

const RenderCount = getRenderCount();

export const FoodDeliveryForm = () => {    
    const methods: UseFormReturn<FoodDeliveryFormType> = useForm<FoodDeliveryFormType>({
        defaultValues: {
            orderNumber: new Date().valueOf(),
            email: '',
            customerName: '',
            mobile: '',
            address: {
                streetAddress: '',
                landmark: '',
                city: '',
                state: '',
            }
        },
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        shouldFocusError: true,
    });

    const { handleSubmit } = methods;

    const onSubmit = (formData: FoodDeliveryFormType) => {
        console.log('form data: ', formData);
    }

    const onError = (err: FieldErrors) => {
        console.log('error: ', err);
    }

    return (
        <form autoComplete='off' noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <RenderCount />
            <FormProvider {...methods}>
                <FoodDeliveryMaster />
                <CheckoutForm />
                <DeliveryAddressForm />
            </FormProvider>          
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
