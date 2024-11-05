import { useForm, FieldErrors, UseFormReturn, FormProvider } from 'react-hook-form'
import { getRenderCount } from '../../utils/getRenderCount';
import { FoodDeliveryFormType } from '../../types';
import { CheckoutForm } from './components/CheckoutForm';
import { DeliveryAddressForm } from './components/DeliveryAddressForm';
import { FoodDeliveryMaster } from './components/FoodDeliveryMaster';
import { SubmitButton } from '../../controls/SubmitButton';

const RenderCount = getRenderCount();

export const FoodDeliveryForm = () => {
    const methods: UseFormReturn<FoodDeliveryFormType> = useForm<FoodDeliveryFormType>({
        defaultValues: {
            orderNumber: new Date().valueOf(),
            customerName: '',
            email: '',
            mobile: '',
            paymentMethod: '',
            deliveryTime: 0,
            address: {
                streetAddress: '',
                landmark: '',
                city: '',
                state: '',
            }
        },
        mode: 'onChange',
        reValidateMode: 'onSubmit',
        shouldFocusError: true,
    });
    const {
        handleSubmit,
        formState: {
            isSubmitting,
            submitCount
        },
    } = methods;

    console.log('submitCount: ', submitCount);

    const onSubmit = async (formData: FoodDeliveryFormType) => {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        console.log('form data: ', formData);
    }
    const onError = (err: FieldErrors) => {
        console.log('error: ', err);
    }

    return (
        <form autoComplete='off' noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <RenderCount />
            <span>submit count {submitCount}</span>
            <FormProvider {...methods}>
                <FoodDeliveryMaster />
                <CheckoutForm />
                <DeliveryAddressForm />
            </FormProvider>
            <SubmitButton 
                value="Submit"
                isSubmitting={isSubmitting}
            />
        </form>
    )
}
