import { useForm, FieldErrors } from 'react-hook-form'
import { getRenderCount } from '../utils/getRenderCount';
import { TextField } from '../controls/TextField';
import { Select } from '../controls/Select';
import { SelectOptionType } from '../types';

type FoodDeliveryFormType = {
    orderNumber: number,
    email: string,
    customerName: string,
    mobile: string,
    paymentMethod: string,
    deliveryTime: string,
    address: {
        streetAddress: string,
        landmark: string,
        city: string,
        state: string,
    },
}

const paymentOptions: SelectOptionType[] = [
    { value: '', text: 'Select' },
    { value: 'online', text: 'Paid Online' },
    { value: 'cash', text: 'Cash' },
];

const deliveryTimeOptions: SelectOptionType[] = [
    { value: 0, text: 'Select' },
    { value: 30, text: 'Half an Hour' },
    { value: 60, text: '1 Hour' },
    { value: 120, text: '2 Hour' },
    { value: 180, text: '3 Hour' },
];

const RenderCount = getRenderCount();

export const FoodDeliveryForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FoodDeliveryFormType>({
        defaultValues: {
            orderNumber: new Date().valueOf(),
            email: '',
            customerName: '',
            mobile: '',
            paymentMethod: '',
            deliveryTime: '',
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

    const onSubmit = (formData: FoodDeliveryFormType) => {
        console.log('form data: ', formData);
    }

    const onError = (err: FieldErrors) => {
        console.log('error: ', err);
    }

    return (
        <form autoComplete='off' noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <RenderCount />

            <div className="row mb-2">
                <div className="col">
                    <TextField
                        label='Order #'
                        {...register('orderNumber')}
                        disabled
                    />
                </div>
                <div className="col">
                    <TextField
                        label='Mobile'
                        placeholder='Mobile'
                        {...register('mobile', {
                            required: {
                                value: true,
                                message: 'Mobile is required'
                            }
                        })}
                        error={errors.mobile}
                    />
                </div>
            </div>

            <div className="row mb-2">
                <div className='col'>
                    <TextField
                        label='Customer Name'
                        placeholder='Customer Name'
                        {...register('customerName', {
                            required: {
                                value: true,
                                message: 'Customer name is required'
                            }
                        })}
                        error={errors.customerName}
                    />
                </div>
                <div className='col'>
                    <TextField
                        label='Email'
                        type='email'
                        placeholder="Email"
                        error={errors.email}
                        {...register('email', {
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                </div>
            </div>

            <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
            <div className="row mb-2">
                <div className="col">
                    <Select
                        label='Payment Method'
                        {...register('paymentMethod')}
                        options={paymentOptions}
                    />
                </div>
                <div className="col">
                    <Select
                        label='Delivery Time'
                        {...register('deliveryTime')}
                        options={deliveryTimeOptions}
                    />
                </div>
            </div>

            <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
            <div className="row mb-2">
                <div className="col">
                    <TextField
                        label='Street Address'
                        placeholder='Street Address'
                        {...register('address.streetAddress', {
                            required: {
                                value: true,
                                message: 'Street address is required'
                            }
                        })}
                        error={errors.address?.streetAddress}
                    />
                </div>
                <div className="col">
                    <TextField
                        label='City'
                        placeholder='City'
                        {...register('address.city', {
                            required: {
                                value: true,
                                message: 'City is required'
                            }
                        })}
                        error={errors.address?.city}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <TextField
                        label='Landmark'
                        placeholder='Landmark'
                        {...register('address.landmark')}
                    />
                </div>
                <div className="col">
                    <TextField
                        label='State'
                        placeholder='State'
                        {...register('address.state')}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
