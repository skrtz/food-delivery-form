import { useFormContext } from "react-hook-form";
import { TextField } from "../../../controls/TextField"
import { DeliveryAddressFormType } from "../../../types";

export const DeliveryAddressForm = () => {
    const { register, formState: { errors } } = useFormContext<{ address: DeliveryAddressFormType }>();

    return (
        <>
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
        </>
    )
}
