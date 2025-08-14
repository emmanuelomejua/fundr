import React from 'react'
import ChartHeader from './ChartHeader';
import Chart from './Chart';

const ChartModule = () => {
  return (
    <div className='h-[279px] lg:h-[491px] mt-4 rounded-[10px] w-[336px] md:w-[600px] lg:w-[1040px] border-1 border-[lightgray]'>
      <ChartHeader/>
      <Chart/>
    </div>
  )
}

export default ChartModule;
