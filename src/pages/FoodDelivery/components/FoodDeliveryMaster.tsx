import { useFormContext } from "react-hook-form";
import { TextField } from "../../../controls/TextField"
import { FoodDeliveryMasterType } from "../../../types";
import { getRenderCount } from "../../../utils/getRenderCount";

const RenderCount = getRenderCount();
export const FoodDeliveryMaster = () => {
    const { register, formState: { errors } } = useFormContext<FoodDeliveryMasterType>();
    return (
        <>
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
        </>
    )
}
