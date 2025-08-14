import React, { FC } from 'react';


interface selectType {
    className: string;
    className1?: string;
    options: any[]
}

const Select: FC<selectType> = ({className, options, className1}) => {
  return (
    <div className={`${className1}`}>
        <select className='outline-none text-[#2E2E2E] cursor-pointer text-[14px] border-0'>
            {options.map((option, index) => (
                <option key={index} value={option.value} className={className}>{option.label}</option>
            ))}
        </select>
    </div>
  )
}

export default Select;
