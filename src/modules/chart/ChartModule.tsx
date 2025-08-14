import React from 'react'
import ChartHeader from './ChartHeader';
import Chart from './Chart';

const ChartModule = () => {
  return (
    <div className='h-[299px] lg:h-[491px] mt-4 rounded-[10px] w-full border-1 border-[lightgray]'>
      <ChartHeader/>
      <Chart/>
    </div>
  )
}

export default ChartModule;
