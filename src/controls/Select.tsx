import { forwardRef, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";
import { SelectOptionType } from "../types";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string,
    error?: FieldError | undefined,
    options: SelectOptionType[]
}

export const Select = forwardRef((props: SelectFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { className = '', label, error, ...other } = props;

    return (
        <div className={`form-floating ${className}`}>
            <select
                className="form-select"
                ref={ref}
                {...other}
            >
                {props.options.map((option, index) => (
                    <option
                        key={index}
                        value={typeof option == 'string' ? option : option.value}
                    >
                        {typeof option == 'string' ? option : option.text}
                    </option>
                ))}
            </select>
            <label>{label}</label>
            {error && <div className="invalid-feedback">{error.message}</div>}
        </div>
    )
})
