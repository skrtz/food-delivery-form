import { useForm, FieldErrors } from 'react-hook-form'
import { getRenderCount } from '../utils/getRenderCount';
import { TextField } from '../controls/TextField';

type FoodDeliveryFormType = {
    orderNumber: number,
    email: string,
    customerName: string,
    mobile: string,
}

const RenderCount = getRenderCount();

export const FoodDeliveryForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FoodDeliveryFormType>({
        defaultValues: {
            orderNumber: new Date().valueOf(),
            email: '',
            customerName: '',
            mobile: '',
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
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
