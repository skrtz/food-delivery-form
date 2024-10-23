import { useForm, FieldErrors } from 'react-hook-form'
import { getRenderCount } from '../utils/getRenderCount';

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
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            disabled
                            placeholder="Order Number"
                            {...register('orderNumber')}
                        />
                        <label>Order Number</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Mobile"
                            {...register('mobile', {
                                required: {
                                    value: true,
                                    message: 'Mobile is required'
                                },
                                minLength: {
                                    value: 10,
                                    message: 'Mobile number should be 10 digits'
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Mobile number should be 10 digits'
                                }
                            })}
                        />
                        <label>Mobile</label>
                    </div>
                    {errors.mobile?.message && <div className='error-feedback'>{errors.mobile?.message}</div>}
                </div>
            </div>
            <div className="row mb-2">
                <div className='col'>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Customer Name"
                            {...register('customerName', {
                                required: {
                                    value: true,
                                    message: 'Customer name is required'
                                }
                            })}
                        />
                        <label>Customer Name</label>
                    </div>
                    {errors.mobile?.message && <div className='error-feedback'>{errors.customerName?.message}</div>}
                </div>
                <div className='col'>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            {...register('email', {
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address'
                                },
                                validate: {
                                    checkEmail: (value) => {
                                        return value != 'email@email.com' || 'Email is blocked';
                                    },
                                    checkDomain: (value) => {
                                        return (
                                            (!value.endsWith('@xyz.com') &&
                                                !value.endsWith('example.com')) ||
                                            'Domain is not allowed'
                                        );
                                    }
                                }
                            })}
                        />
                        <label>Email</label>
                    </div>
                    {errors.email?.message && <div className='error-feedback'>{errors.email?.message}</div>}
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
