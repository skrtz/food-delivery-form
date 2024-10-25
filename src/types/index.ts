export type SelectOptionType = string |
{ value: string, text: string } | 
{ value: number, text: string }

export type CheckoutFormType = {
    paymentMethod: SelectOptionType,
    deliveryTime: SelectOptionType
}

export type FoodDeliveryFormType = {
    orderNumber: number,
    mobile: string,
    customerName: string,
    email: string,
    address: {
        streetAddress: string,
        landmark: string,
        city: string,
        state: string,
    },
} & CheckoutFormType