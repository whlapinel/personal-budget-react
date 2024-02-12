import React from 'react'
import DonutChart from './donut-chart'
import {data} from './donut-data'

export default function DonutChartComponent() {

  return (
    <DonutChart data={data} width={500} height={400}/>
  )
}
