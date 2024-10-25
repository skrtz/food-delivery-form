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
            <div>list of ordered food items</div>
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
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
