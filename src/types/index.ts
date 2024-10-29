export type SelectOptionType = string |
{ value: string, text: string } | 
{ value: number, text: string }

export type CheckoutFormType = {
    paymentMethod: SelectOptionType,
    deliveryTime: SelectOptionType
}

export type DeliveryAddressFormType = {
    streetAddress: string,
    landmark: string,
    city: string,
    state: string,
}

export type FoodDeliveryFormType = {  
    address: DeliveryAddressFormType,
} & FoodDeliveryMasterType & CheckoutFormType

export type FoodDeliveryMasterType = {
    orderNumber: number,
    mobile: string,
    customerName: string,
    email: string,
}