import React from 'react'
import { getRenderCount } from './utils/getRenderCount';

type FoodDeliveryFormType = {
    customerName: string,
    mobile: string,
}

type FoodDeliveryFormErrorType = {
    customerName: string,
    mobile: string,
}

const RenderCount = getRenderCount();

export const TypicalForm = () => {
    const [values, setValues] = React.useState<FoodDeliveryFormType>({
        customerName: '',
        mobile: '',
    })

    const [errors, setErrors] = React.useState<FoodDeliveryFormErrorType>({
        customerName: '',
        mobile: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const validateFormData = () => {
        const tempErrors: FoodDeliveryFormErrorType = {
            customerName: '',
            mobile: '',
        }

        if (!values.customerName) {
            tempErrors.customerName = 'This field is required'
        }

        if (!values.mobile) {
            tempErrors.mobile = 'This field is required'
        }

        setErrors({
            ...tempErrors,
        })

        return Object.values(tempErrors).every((x) => x === '')
    }

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateFormData()) {
            alert('Form Submitted')
            console.log(values)
        } else {
            alert('Form has errors')
            console.log(errors)
        }
    }

    return (
        <form autoComplete='off' onSubmit={onSubmit}>
            <RenderCount />
            <div className="form-floating mb-3">
                <input
                    type="text"
                    name='customerName'
                    className="form-control"
                    placeholder="Customer Name"
                    value={values.customerName}
                    onChange={(e) => setValues({ ...values, customerName: e.target.value })}
                />
                <label>Customer Name</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    name='mobile'
                    className="form-control"
                    placeholder="Mobile"
                    value={values.mobile}
                    onChange={(e) => handleInputChange(e)}
                />
                <label>Mobile</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
