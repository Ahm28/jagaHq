import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Label from '../base/label';
import Input from '../base/Input';

export interface InputFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
  ({ label, name, defaultValue = '', ...rest }, ref) => {
    const methods = useFormContext();

    return (
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={methods.control}
        render={({ field, fieldState }) => {
          return (
            <div className='flex flex-col items-start gap-2' ref={ref}>
              {label && <Label>{label}</Label>}
              <Input {...field} {...rest} />
              {fieldState.invalid && (
                <span className='text-xs font-medium text-red-600'>
                  {fieldState.error?.message}
                </span>
              )}
            </div>
          );
        }}
      />
    );
  }
);

InputForm.displayName = 'InputForm';

export default InputForm;
