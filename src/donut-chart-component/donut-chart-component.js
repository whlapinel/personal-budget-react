import React, { useEffect, useState } from 'react'
import DonutChart from './donut-chart'
import { defaultData } from './donut-data'
import axios from 'axios'

export default function DonutChartComponent() {
  const [data, setData] = useState(defaultData)

  useEffect(() => {
    async function getChartData() {
      const url = 'http://localhost:3001/budget';
      const res = await axios.get(url);
      console.log(res.data.myBudget);
      const budgetData = res.data.myBudget;
      const updatedData = budgetData.map((item) => {
        return (
          {
            name: item.title,
            value: item.budget
          }
        );
      });
      console.log(updatedData);
      setData(updatedData);
    }
    getChartData();
  }, []);

  return (
    <DonutChart data={data} width={600} height={350} />
  )
}
