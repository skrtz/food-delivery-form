import { useFormContext } from "react-hook-form";
import { Select } from "../../../controls/Select"
import { CheckoutFormType, SelectOptionType } from "../../../types";
import { getRenderCount } from "../../../utils/getRenderCount";

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

export const CheckoutForm = () => {
    const { register, formState: { errors } } = useFormContext<CheckoutFormType>();

    return (
        <>
            <RenderCount />
            <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
            <div className="row mb-2">
                <div className="col">
                    <Select
                        label='Payment Method'
                        {...register('paymentMethod', {
                            required: 'Payment method is required'
                        })}
                        options={paymentOptions}
                        error={errors.paymentMethod}
                    />
                </div>
                <div className="col">
                    <Select
                        label='Delivery Time'
                        {...register('deliveryTime')}
                        options={deliveryTimeOptions}
                        error={errors.deliveryTime}
                    />
                </div>
            </div>
        </>
    )
}
