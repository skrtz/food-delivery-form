export type SelectOptionType = string |
{ value: string, text: string } | 
{ value: number, text: string }

export type CheckoutFormType = {
    paymentMethod: string,
    deliveryTime: number,
}

export type DeliveryAddressFormType = {
    streetAddress: string,
    landmark: string,
    city: string,
    state: string,
}

export type FoodDeliveryFormType = {  
    address: DeliveryAddressFormType,
} & FoodDeliveryMasterFormType & CheckoutFormType

export type FoodDeliveryMasterFormType = {
    orderNumber: number,
    mobile: string,
    customerName: string,
    email: string,
}