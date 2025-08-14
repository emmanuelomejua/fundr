import React, { FC } from 'react';


interface selectType {
    className: string;
    className1?: string;
    options: { label: string; value: string }[];
    value?: string;
    onChange?: (value: string) => void;
}

const Select: FC<selectType> = ({className, options, className1, onChange, value}) => {
  return (
    <div className={`${className1}`}>
        <select 
          value={value} 
          onChange={(e) => onChange?.(e.target.value)} 
          className='outline-none text-[#2E2E2E] cursor-pointer text-[14px] border-0'>
            {options.map((option, index) => (
                <option key={index} value={option.value} className={className}>{option.label}</option>
            ))}
        </select>
    </div>
  )
}

export default Select;
