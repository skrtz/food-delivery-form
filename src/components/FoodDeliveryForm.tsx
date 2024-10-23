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
    const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
        defaultValues: {
            orderNumber: new Date().valueOf(),
            email: '',
            customerName: '',
            mobile: '',
        }
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
                                    message: 'u suck'
                                },
                                minLength: {
                                    value: 10,
                                    message: 'u suck'
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'u suck'
                                }
                            })}
                        />
                        <label>Mobile</label>
                    </div>
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
                                required: true
                            })}
                        />
                        <label>Customer Name</label>
                    </div>
                </div>
                <div className='col'>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            {...register('email',{
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        <label>Email</label>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
