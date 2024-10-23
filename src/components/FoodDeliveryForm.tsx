import { useForm } from 'react-hook-form'
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

    return (
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
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
                            {...register('mobile')}
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
                            {...register('customerName')}
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
                            {...register('email')}
                        />
                        <label>Email</label>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
