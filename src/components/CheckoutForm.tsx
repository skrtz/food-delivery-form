import { useFormContext } from "react-hook-form";
import { Select } from "../controls/Select"
import { FoodDeliveryFormType, SelectOptionType } from "../types";

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

export const CheckoutForm = () => {
    const { register, formState: { errors } } = useFormContext<FoodDeliveryFormType>();

    return (
        <>
            <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
            <div className="row mb-2">
                <div className="col">
                    <Select
                        label='Payment Method'
                        {...register('paymentMethod', {
                            required: {
                                value: true,
                                message: 'Payment method is required'
                            }
                        })}
                        options={paymentOptions}
                        error={errors.paymentMethod}
                    />
                </div>
                <div className="col">
                    <Select
                        label='Delivery Time'
                        {...register('deliveryTime', {
                            required: {
                                value: true,
                                message: 'Delivery time is required'
                            }
                        })}
                        options={deliveryTimeOptions}
                        error={errors.deliveryTime}
                    />
                </div>
            </div>
        </>
    )
}
